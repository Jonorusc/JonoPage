import * as S from './styles'

import { Container } from '@/components/Container'
import { Flex, FlexColumn } from '@/components/Flex'
import Text from '@/components/Text'
import Input from '@/components/Input'
import Form from '@/components/Form'
import Notify from '@/components/Notify'

import { useAnimation, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { createDocument } from '@/firebase/crud'

import type {
  InputValue,
  FormEvent,
  FormErrorCallbackFunction
} from '@/types/form'

const Contact = () => {
  const [notify, setNotify] = useState({
    message: '',
    visible: false,
    error: false
  })
  const targetRef = useRef(null)
  const isInView = useInView(targetRef)
  const wrapperControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      wrapperControls.start('visible')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  const onError: FormErrorCallbackFunction = () => {
    setNotify({
      message: 'Please fill all the fields.',
      visible: true,
      error: true
    })
  }

  const onSubmit = async (e: FormEvent, formValues: InputValue) => {
    // creating document, if it doesn't exist the document will be created
    await createDocument('messages', formValues)
      .then(() => {
        setNotify({ message: 'Message sent!', visible: true, error: false })
      })
      .catch(() => {
        setNotify({
          message: 'Something went wrong, try again later.',
          visible: true,
          error: true
        })
      })
  }

  return (
    <S.Wrapper
      ref={targetRef}
      cssText="position: relative; width: 100%; margin-top: 20rem; background-image: url('/images/bbburst.svg');"
      height="100vh"
      id="contact"
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 75 },
        visible: { opacity: 1, scale: 1, y: 0 }
      }}
      initial="hidden"
      animate={wrapperControls}
      transition={{ duration: 0.5, deley: 0.25 }}
    >
      <Container>
        <FlexColumn align="center" cssText="margin: 0 auto;">
          <Form submitName="Send" onSubmit={onSubmit} onError={onError}>
            <FlexColumn gap="4rem">
              <Text color="green" bold size="large" m="0 auto">
                Contact me
              </Text>
              <Flex gap="2.5rem">
                <Input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  fontSize="medium"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  fontSize="medium"
                  required
                />
              </Flex>
              <Input
                name="message"
                type="textarea"
                placeholder="Message"
                fontSize="medium"
                required
              />
              {/* <Button
                text="Send"
                center
                color="primary"
                bgcolor="green"
                fontSize="medium"
              /> */}
            </FlexColumn>
          </Form>
          <FlexColumn justify="center" align="center">
            <Text color="darker" size="medium" mt="2rem" align="center">
              You can also send me an email.
            </Text>
            <Text color="secondary" size="medium" align="center">
              devbylucas@gmail.com
            </Text>
          </FlexColumn>
        </FlexColumn>
      </Container>
      <Notify
        type={notify.error ? 'error' : 'success'}
        message={notify.message}
        visible={notify.visible}
        onClose={() => setNotify({ message: '', visible: false, error: false })}
      />
    </S.Wrapper>
  )
}

export default Contact
