const Hero = (): JSX.Element => (
  <div className='mt-32 flex flex-row items-center justify-center'>
    <div
      className='flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row items-center justify-between w-screen px-6'
      style={{ maxWidth: '1300px' }}>
      <div className='p-4'>
        <h1 className='text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold'>
          ACM Hacktoberfest
        </h1>
        <h3 className='py-1 text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-medium'>
          October 17th, 9AM - 9PM CST
        </h3>
        <img
          src='/img/sponsors-light.svg'
          alt=''
          style={{ maxHeight: '25px', width: 'auto' }}
          className='mt-2'
        />
        <div className='w-full flex-row items-center'>
          <button
            onClick={() => (window.location.href = '//apply.acmutd.co/hack')}
            className='mt-6 rounded-full py-2 px-8 text-lg bg-pond hover:bg-blue-300 hover:text-black text-ocean font-bold'>
            Register now
          </button>
        </div>
      </div>
      <div className='lg:pr-20 xl:pr-20'>
        <img src='/img/acm-htf.png' style={{ maxHeight: '400px', width: 'auto' }} />
      </div>
    </div>
  </div>
)

export default Hero
