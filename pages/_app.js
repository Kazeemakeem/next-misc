// import Footer from 'components/layout/Footer' path aliases for absolute imports can be used @/*** */
// import Header from 'components/layout/Header'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import 'styles/globals.css'
import 'styles/layout.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  if(Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Head>
        <title>Codevolution</title>
        <meta name='description' content='Awesome youtube channel'/>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
