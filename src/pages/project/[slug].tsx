import React from 'react'
import { NextSeo } from 'next-seo'

import type { GetStaticProps } from 'next'
import type { Project, SpaProps } from '@/types/spa'

import { getDocumentById } from '@/firebase/crud'
import { getProject } from '@/firebase/helpers'
import ProjectDetails from '@/templates/Spa/Project'

const Index = React.memo((props: Project) => {
  const canonical = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <>
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
    </>
  )
})

Index.displayName = 'Project'

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
