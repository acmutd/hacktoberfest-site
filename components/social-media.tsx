const SocialMedia = (): JSX.Element => (
  <div className='mt-20 text-center'>
    <h2 className='font-bold text-4xl'>Social Media</h2>
    <div className='text-lg mb-4'>Follow us for more updates!</div>
    <div className='my-10 flex flex-row items-center justify-center'>
      <div className='px-4'>
        <img src='/img/fb.svg' width='30' height='auto' />
      </div>
      <div className='px-4'>
        <img src='/img/ig.svg' width='30' height='auto' />
      </div>
      <div className='px-4'>
        <img src='/img/in.svg' width='30' height='auto' />
      </div>
    </div>
    <div>
      or, contact us at <span className='text-fuschia'>hacktoberfest@acmutd.co</span>!
    </div>
  </div>
)

export default SocialMedia
