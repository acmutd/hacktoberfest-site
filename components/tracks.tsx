import TrackCard from './track-card'

const Tracks = (): JSX.Element => (
  <div className='mt-10 text-center'>
    <h2 className='font-bold text-4xl flex items-center justify-center'>
      <img src='/img/leaf-1.svg' className='-ml-24 mt-2 h-12 absolute z-10' alt='' />
      <img src='/img/sparkles.svg' className='ml-20 -mt-5 h-3 absolute z-10' alt='' />
      <img src='/img/leaf-2.svg' className='ml-24 mt-3 h-6 absolute z-10' alt='' />
      <span className='z-0'>Experience</span>
    </h2>
    <div className='text-lg mb-4'>Experience three awesome tracks!</div>
    <TrackCard
      name='ACM Track'
      description='Looking to gain some experience in contributing to open source? Build and learn from the workshops hosted by all the ACM Divisions! 
          We’ll also be having product launches, industry panels and past contributors to popular open source projects come in to help you get started on your journey.'>
      Featured schedule here
    </TrackCard>
    <TrackCard
      name='Student Org Track'
      description='Learn from the collective expertise of our partner organizations. Come join us for a series of
      talks about everything from cloud computing to spreading diversity!'>
      Featured schedule here
    </TrackCard>
    <TrackCard
      name='Community Track'
      description='When you’re ready to chill and relax, hop into our community track events. Spend some time painting with Bob Ross, making halloween themed pumpkin art & playing minecraft with your friends. We’re all here to have a good time.'>
      Featured schedule here
    </TrackCard>
  </div>
)

export default Tracks
