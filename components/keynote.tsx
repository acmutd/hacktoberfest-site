const Keynote = (): JSX.Element => (
  <div className='py-16 flex flex-row justify-center items-center'>
    <div className='mr-8'>
      <h4 className='text-2xl'>
        featuring <span className='text-fuschia'>keynote speaker</span>
      </h4>
      <h3 className='text-5xl font-bold mt-1 mb-1'>Jeff Dean</h3>
      <h4 className='text-xl italic'>lead of Google AI, tech god</h4>
    </div>
    <img src='/img/jeff-dean-sample.png' alt='god' width='250' />
  </div>
)

export default Keynote
