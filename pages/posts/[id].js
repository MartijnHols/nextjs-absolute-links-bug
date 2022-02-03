import Link from 'next/link'

import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <Link href="https://nextjs.org">Test</Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  console.log('Generating', params.id)
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    },
    revalidate: 1
  }
}
