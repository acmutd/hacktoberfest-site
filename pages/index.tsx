import { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Speakers from '../components/speakers'
import Tracks from '../components/tracks'
import Partners from '../components/partners'
import FAQ from '../components/faq'
import SocialMedia from '../components/social-media'
import Footer from '../components/footer'
import Schedule from '../components/schedule'

const Home = (): JSX.Element => {
  const homeRef = useRef(null)
  const experienceRef = useRef(null)
  const scheduleRef = useRef(null)
  const faqRef = useRef(null)
  const socialMediaRef = useRef(null)
  return (
    <>
      <Head>
        <title>ACM Hacktoberfest</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar
        refs={[homeRef, experienceRef, scheduleRef, faqRef]}
        buttonNames={['Home', 'Experience', 'Schedule', 'FAQs']}
      />
      <section ref={homeRef}>
        <Hero />
      </section>
      {/* <section>
        <Speakers />
      </section> */}
      <section ref={experienceRef}>
        <Tracks />
      </section>
      <section ref={scheduleRef}>
        <Schedule />
      </section>
      {/* <section ref={partnersRef}>
        <Partners />
      </section> */}
      <section ref={faqRef}>
        <FAQ />
      </section>
      <section ref={socialMediaRef}>
        <SocialMedia />
      </section>
      <Footer />
    </>
  )
}

export default Home
