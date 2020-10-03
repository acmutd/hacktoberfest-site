import Head from 'next/head'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Keynote from '../components/keynote'
import Tracks from '../components/tracks'
import Partners from '../components/partners'
import SocialMedia from '../components/social-media'
import Footer from '../components/footer'

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>ACM Hacktoberfest</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Hero />
      <Keynote />
      <Tracks />
      <Partners />
      <SocialMedia />
      <Footer />
    </>
  )
}

export default Home
