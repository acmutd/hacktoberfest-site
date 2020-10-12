import firebase from '../services/firebase'

const SocialMedia = (): JSX.Element => {
  const socialClick = (socialName: string) => () => {
    // log social media click event
    firebase.analytics().logEvent('share', { method: socialName })
  }
  return (
    <div className='mt-20 text-center'>
      <h2 className='font-bold text-4xl flex items-center justify-center'>
        <img src='/img/leaf-1.svg' className='-ml-24 pr-2 mt-2 h-10 absolute z-10' alt='' />
        <img src='/img/sparkles.svg' className='ml-24 -mt-6 h-3 absolute z-10' alt='' />
        <img src='/img/leaf-2.svg' className='ml-32 pr-10 mt-3 h-6 absolute z-10' alt='' />
        <span className='z-0'>Social Media</span>
      </h2>
      <div className='text-lg mb-4'>Follow us for more updates!</div>
      <div className='my-10 flex flex-row items-center justify-center'>
        <a className='px-4' href='//www.facebook.com/acmatutd' onClick={socialClick('fb')}>
          <img src='/img/fb.svg' width='30' height='auto' />
        </a>
        <a className='px-4' href='//www.instagram.com/utdacm/' onClick={socialClick('ig')}>
          <img src='/img/ig.svg' width='30' height='auto' />
        </a>
        <a
          className='px-4'
          href='//www.linkedin.com/company/acmutd/'
          onClick={socialClick('linkedin')}>
          <img src='/img/in.svg' width='30' height='auto' />
        </a>
      </div>
      <div>
        or, contact us at{' '}
        <a
          href='mailto:hacktoberfest@acmutd.co'
          className='text-fuschia'
          onClick={socialClick('email')}>
          hacktoberfest@acmutd.co
        </a>
        !
      </div>
    </div>
  )
}

export default SocialMedia
