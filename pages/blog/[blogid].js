import React from 'react'
import Head from 'next/head'

const Blog = ({ title, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <h1 className='content'>Article {process.env.NEXT_PUBLIC_ANALYTICS_ID}</h1>
    </div>
  )
}

export default Blog

export const getServerSideProps = async () => {
  const user = process.env.DB_USER
  const password = process.env.DB_PASSWORD

  return {
    props: {
      title: 'Article Title',
      description: 'Article description'
    }
  }
}
