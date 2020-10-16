import Head from 'next/head'
import { NonHomeNavbar } from '../components/navbar'
import Rankings from '../components/rankings'

const Leaderboard = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>ACM Hacktoberfest</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NonHomeNavbar />
      <div className='mt-24'></div>
      <h2 className='font-bold text-4xl flex items-center justify-center'>
        <img src='/img/sparkles.svg' className='-ml-20 pr-8 -mt-6 h-3 absolute z-10' alt='' />
        <img src='/img/leaf-2.svg' className='ml-32 pr-8 mt-3 h-6 absolute z-10' alt='' />
        <span className='z-0'>Leaderboard</span>
      </h2>
      <div className='mt-8'>
        <Rankings />
      </div>
    </>
  )
}

export default Leaderboard
