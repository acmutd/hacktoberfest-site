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
import Thanks from '../components/thanks'

const Home = (): JSX.Element => {
  const homeRef = useRef(null)
  const experienceRef = useRef(null)
  const scheduleRef = useRef(null)
  const faqRef = useRef(null)
  const socialMediaRef = useRef(null)
  return (
    <>
      <Head>
        <title>ACM Hacktoberfest – Home</title>
        <meta name='title' content='ACM Hacktoberfest – Home' />
        <meta
          name='description'
          content="ACM UTD's celebration of open source as part of DigitalOcean's month-long Hacktoberfest event. Come for the talks and workshops, stay for the prizes. Register today."
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://hacktoberfest.acmutd.co/' />
        <meta property='og:title' content='ACM Hacktoberfest – Home' />
        <meta
          property='og:description'
          content="ACM UTD's celebration of open source as part of DigitalOcean's month-long Hacktoberfest event. Come for the talks and workshops, stay for the prizes. Register today."
        />
        <meta property='og:image' content='https://hacktoberfest.acmutd.co/img/metadata-img.png' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://hacktoberfest.acmutd.co/' />
        <meta property='twitter:title' content='ACM Hacktoberfest – Home' />
        <meta
          property='twitter:description'
          content="ACM UTD's celebration of open source as part of DigitalOcean's month-long Hacktoberfest event. Come for the talks and workshops, stay for the prizes. Register today."
        />
        <meta
          property='twitter:image'
          content='https://hacktoberfest.acmutd.co/img/metadata-img.png'></meta>
      </Head>
      <Navbar
        refs={[homeRef, experienceRef, scheduleRef, faqRef]}
        buttonNames={['Home', 'Experience', 'Schedule', 'FAQs']}
      />
      <section ref={homeRef}>
        <Hero />
      </section>
      <section>
        <Speakers />
      </section>
      <a id='experience' />
      <section ref={experienceRef}>
        <Tracks />
      </section>
      <a id='schedule' />
      <section ref={scheduleRef}>
        <Schedule />
      </section>
      {/* <section ref={partnersRef}>
        <Partners />
      </section> */}
      <a id='faq' />
      <section ref={faqRef}>
        <FAQ />
      </section>
      <a id='thanks' />
      <section>
        <Thanks />
      </section>
      <a id='social-media' />
      <section ref={socialMediaRef}>
        <SocialMedia />
      </section>
      <Footer />
    </>
  )
}

export default Home
