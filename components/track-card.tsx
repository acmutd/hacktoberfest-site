const TrackCard = ({ name, description }: { name: string; description: string }): JSX.Element => (
  <div
    className='bg-lake rounded-md mx-auto my-8 px-4 py-10 flex flex-row items-center'
    style={{ maxWidth: '1000px' }}>
    <div className='w-1/3 font-medium text-3xl'>{name}</div>
    <div className='w-2/3 text-left px-10'>{description}</div>
  </div>
)

export default TrackCard
