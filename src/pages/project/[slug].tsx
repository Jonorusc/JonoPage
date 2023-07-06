import React from 'react'

import type { GetStaticProps } from 'next'
import type { Project, SpaProps } from '@/types/spa'

import { getDocumentById } from '@/firebase/crud'
import { getProject } from '@/firebase/helpers'
import ProjectDetails from '@/templates/Spa/Project'

const Index = React.memo((props: Project) => {
  return <ProjectDetails project={props} />
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
