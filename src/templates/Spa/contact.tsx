import { Container } from '@/components/Container'
import * as S from './styles'
import { Flex, FlexColumn } from '@/components/Flex'
import Text from '@/components/Text'
import Input from '@/components/Input'
// import Button from '@/components/Button'
import Form from '@/components/Form'
import Notify from '@/components/Notify'

import { useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { createDocument } from '@/firebase/crud'

import { InputValue, FormEvent, FormErrorCallbackFunction } from '@/types/form'

const Contact = () => {
  const [notify, setNotify] = useState({
    message: '',
    visible: false,
    error: false
  })
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 1.06])
  const y = useTransform(scrollYProgress, [0, 0.1], [200, 0])

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
      cssText="position: relative; width: 100%; margin-top: 20rem;"
      height="100vh"
      style={{ scale, y, opacity }}
      id="contact"
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
