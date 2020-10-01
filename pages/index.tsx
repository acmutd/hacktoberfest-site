import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title>ACM Hacktoberfest</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <img src='/img/htf-logo-light.svg' className='mt-24 mx-auto max-w-xl bg-cover' />
    </div>
  )
}

export default Home
