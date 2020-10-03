import { FunctionComponent, PropsWithChildren, useState } from 'react'

type TrackCardProps = {
  name: string
  description: string
}

const TrackCard: FunctionComponent<TrackCardProps> = (
  props: PropsWithChildren<TrackCardProps>
): JSX.Element => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <button
        className='bg-lake mx-auto mt-8 px-4 py-8 flex flex-row items-center cursor-pointer transform transition-all duration-200 hover:scale-110 active:scale-100 active:outline-none outline-none'
        style={{
          borderTopLeftRadius: '30px',
          borderBottomRightRadius: '30px',
          maxWidth: '1000px',
        }}
        onClick={() => setVisible(!visible)}>
        <div className='w-1/3 font-medium text-3xl'>{props.name}</div>
        <div className='w-2/3 text-left px-10'>{props.description}</div>
      </button>
      {visible && (
        <div style={{ maxWidth: '960px' }} className='my-0 py-6 mx-auto bg-cerulean rounded-b-md'>
          {props.children}
        </div>
      )}
    </>
  )
}

export default TrackCard
