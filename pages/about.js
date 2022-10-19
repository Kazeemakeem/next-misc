import Head from 'next/head'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='content'>
      <Head>
        <title>About Codevolution</title>
        <meta name='description' content='Free tutorial on react'/>
      </Head>
      <h1>This is about page</h1>
    </div>
  )
}

export default About

About.getLayout = function Pagelayout(page) {
  return(
    <>
      {page}
      <Footer />
    </>
  )
}