import { FunctionComponent, useState } from 'react'

type TrackCardProps = {
  name: string
  description: string
}

const TrackCard: FunctionComponent<TrackCardProps> = (props: TrackCardProps): JSX.Element => {
  return (
    <div
      className='bg-lake px-6 py-8 w-full xl:w-1/3 mx-8 my-4 transform hover:scale-105 transition-all ease-in-out duration-200'
      style={{ borderTopLeftRadius: '30px', borderBottomRightRadius: '30px' }}>
      <div className='text-center font-medium text-3xl mb-2'>{props.name}</div>
      <div className='text-left'>{props.description}</div>
    </div>
  )
}

export default TrackCard
