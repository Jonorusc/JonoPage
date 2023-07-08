import React from 'react'
import { NextSeo } from 'next-seo'
// import { useRouter } from 'next/router'

import type { GetStaticProps } from 'next'
import type { Project, SpaProps } from '@/types/spa'

import { getDocumentById } from '@/firebase/crud'
import { getProject } from '@/firebase/helpers'
import ProjectDetails from '@/templates/Spa/Project'
import Page404 from '@/pages/404'
import PageTransition from '@/components/PageTransition'

const Index = (props: Project) => {
  // const router = useRouter()

  // if (router.isFallback) {
  //   return <div>Loading...</div>
  // }

  if (!props || !props.img) {
    return <Page404 />
  }

  const canonical = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <PageTransition>
      <NextSeo
        title={`${props.title} - DevByLucas`}
        description={props.description}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title: `${props.title} - DevByLucas`,
          description: props.description,
          images: [
            {
              url: props.img[0],
              alt: `${props.title}`
            }
          ]
        }}
      />
      <ProjectDetails project={props} />
    </PageTransition>
  )
}

export async function getStaticPaths() {
  const data: SpaProps = await getDocumentById('spa', 'page')
  const paths = data.projects.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = await getProject(params?.slug as string)

  if (!project) {
    return { notFound: true }
  }

  return {
    revalidate: 60,
    props: {
      ...project
    }
  }
}

export default Index
