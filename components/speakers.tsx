import { useState } from 'react'

const Speakers = (): JSX.Element => {
  // const [selectedSpeaker, setSelectedSpeaker] = useState<number>(null)
  // const speakerList = ['Jeff Dean', 'Tim Cook', 'Satya Nadella', 'Test Human']
  // const bios = ['resident god at Google', 'CEO at $AAPL', 'CEO at $MSFT', 'not a real human']
  return (
    <div className='pt-20 pb-10'>
      <div className='text-2xl text-center'>
        with <span className='text-fuschia'>featured speakers</span>
      </div>

      <div className='mx-auto my-0' style={{ maxWidth: '1000px' }}>
        <FeaturedSpeaker
          name='Rocio Montes'
          bio='Staff Software Engineer leading Open Source and Inner Source at Intuit, Intuit Office of the Chief Architect, Co-Chair for Grace Hopper Conference’ Open Source Day ‘20, leadership team for San Diego “Girl Develop it” and Co-founder of “Emar”'
          imageURL='/img/headshots/featured/rocio-montes-headshot-circle1000.png'
          link='https://www.linkedin.com/in/montesrocio'
        />
        <FeaturedSpeaker
          name='Chandini Portteus'
          bio='Principal & CEO @ Portteus Consulting, Founding Partner & Chair at US Blockchain Advocacy Partners, President and Executive-in-Residence @ EBW2020 (Empower a billion women by 2020), Former CEO of Livestrong, Wipe Out Kids Cancer and Chief Mission Officer of Susan G. Komen'
          imageURL='/img/headshots/featured/chandini-portteus-headshot-circle375.png'
          link='https://www.linkedin.com/in/chandini-portteus-mph-4664a55'
        />
      </div>

      {/* <h3 className='pt-20 pb-8 text-center font-bold text-3xl'>Full Speaker List</h3>
      <div className='flex flex-row flex-wrap justify-center items-center'>
        <img
          src='/img/sample-person-1.jpeg'
          width='200'
          className='mx-8 my-4 rounded-full opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out'
          alt=''
          onMouseOver={() => setSelectedSpeaker(0)}
          onMouseOut={() => setSelectedSpeaker(null)}
        />
        <img
          src='/img/sample-person-2.jpeg'
          width='200'
          className='mx-8 my-4 rounded-full opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out'
          alt=''
          onMouseOver={() => setSelectedSpeaker(1)}
          onMouseOut={() => setSelectedSpeaker(null)}
        />
        <img
          src='/img/sample-person-3.jpeg'
          width='200'
          className='mx-8 my-4 rounded-full opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out'
          alt=''
          onMouseOver={() => setSelectedSpeaker(2)}
          onMouseOut={() => setSelectedSpeaker(null)}
        />
        <img
          src='/img/sample-person-4.jpeg'
          width='200'
          className='mx-8 my-4 rounded-full opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out'
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
      </div>*/}
    </div>
  )
}

interface FeaturedSpeakerProps {
  name: string
  bio: string
  imageURL: string
  link: string
}

const FeaturedSpeaker = (props: FeaturedSpeakerProps): JSX.Element => (
  <div className='px-8 py-8 flex flex-col-reverse md:flex-row lg:flex-row xl:flex-row justify-center items-center'>
    <div className='md:mr-16 lg:mr-16 xl:mr-16 mt-4 md:mt-0 lg:mt-0 xl:mt-0'>
      <h3 className='text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-bold mt-1 mb-1 cursor-pointer'>
        <a href={props.link} target='_blank' rel='noreferrer' className='hover:text-fuschia'>
          {props.name}
        </a>
      </h3>
      <h4 className='text-md italic max-w-sm'>{props.bio}</h4>
    </div>
    <img src={props.imageURL} alt={props.name} width='250' />
  </div>
)

export default Speakers
