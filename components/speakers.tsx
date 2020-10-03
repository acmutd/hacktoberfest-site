import { useState } from 'react'

const Speakers = (): JSX.Element => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<number>(null)
  const speakerList = ['Jeff Dean', 'Tim Cook', 'Satya Nadella', 'Test Human']
  const bios = ['resident god at Google', 'CEO at $AAPL', 'CEO at $MSFT', 'not a real human']
  return (
    <div className='pt-20 pb-10'>
      <div className='flex flex-row justify-center items-center'>
        <div className='mr-8'>
          <h4 className='text-2xl'>
            featuring <span className='text-fuschia'>keynote speaker</span>
          </h4>
          <h3 className='text-5xl font-bold mt-1 mb-1'>Test Speaker</h3>
          <h4 className='text-xl italic'>CEO of ACM</h4>
        </div>
        <img src='/img/jeff-dean-sample.png' alt='god' width='250' />
      </div>
      <h3 className='pt-32 pb-8 text-center font-bold text-3xl'>Other Featured Speakers</h3>
      <div className='flex flex-row justify-center items-center'>
        <img
          src='/img/sample-person-1.jpeg'
          width='200'
          className='mx-8 rounded-full opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out'
          alt=''
          onMouseOver={() => setSelectedSpeaker(0)}
          onMouseOut={() => setSelectedSpeaker(null)}
        />
        <img
          src='/img/sample-person-2.jpeg'
          width='200'
          className='mx-8 rounded-full opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out'
          alt=''
          onMouseOver={() => setSelectedSpeaker(1)}
          onMouseOut={() => setSelectedSpeaker(null)}
        />
        <img
          src='/img/sample-person-3.jpeg'
          width='200'
          className='mx-8 rounded-full opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out'
          alt=''
          onMouseOver={() => setSelectedSpeaker(2)}
          onMouseOut={() => setSelectedSpeaker(null)}
        />
        <img
          src='/img/sample-person-4.jpeg'
          width='200'
          className='mx-8 rounded-full opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out'
          alt=''
          onMouseOver={() => setSelectedSpeaker(3)}
          onMouseOut={() => setSelectedSpeaker(null)}
        />
      </div>
      <div className='mt-4 text-center'>
        <h4 className='text-lg font-medium'>
          {selectedSpeaker !== null ? speakerList[selectedSpeaker] : <span>&#8203;</span>}
        </h4>
        <h4 className='italic'>
          {selectedSpeaker !== null ? bios[selectedSpeaker] : <span>&#8203;</span>}
        </h4>
      </div>
    </div>
  )
}

export default Speakers
