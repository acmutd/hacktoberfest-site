import Head from 'next/head'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Speakers from '../components/speakers'
import Tracks from '../components/tracks'
import Partners from '../components/partners'
import SocialMedia from '../components/social-media'
import Footer from '../components/footer'
import { useRef } from 'react'

const Home = (): JSX.Element => {
  const homeRef = useRef(null)
  const experienceRef = useRef(null)
  const partnersRef = useRef(null)
  const socialMediaRef = useRef(null)
  return (
    <>
      <Head>
        <title>ACM Hacktoberfest</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar
        homeRef={homeRef}
        experienceRef={experienceRef}
        partnersRef={partnersRef}
        socialMediaRef={socialMediaRef}
      />
      <section ref={homeRef}>
        <Hero />
      </section>
      <section>
        <Speakers />
      </section>
      <section ref={experienceRef}>
        <Tracks />
      </section>
      <section ref={partnersRef}>
        <Partners />
      </section>
      <section ref={socialMediaRef}>
        <SocialMedia />
      </section>
      <Footer />
    </>
  )
}

export default Home
