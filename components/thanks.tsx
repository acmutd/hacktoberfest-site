import credits from '../credits'
import firebase from '../services/firebase'

const Thanks = (): JSX.Element => {
  const linkClick = (name: string) => () => {
    firebase.analytics().logEvent('credits_link_click', {
      name,
    })
  }
  return (
    <div className='mt-20 text-center'>
      <h2 className='font-bold text-4xl flex items-center justify-center'>
        <img src='/img/sparkles.svg' className='-ml-20 pl-4 -mt-6 h-3 absolute z-10' alt='' />
        <span className='z-0'>Our Team</span>
      </h2>
      <div className='text-md mb-4 text-center max-w-sm my-0 mx-auto'>
        This event wouldn&apos;t have been possible without our amazing ACM team working behind the
        scenes.
      </div>
      <div
        className='mt-4 flex flex-wrap flex-row justify-around px-4 mx-auto my-0'
        style={{ maxWidth: '1000px' }}>
        {credits.map(person => (
          <div className='p-4 flex justify-start flex-col items-start' key={person.name}>
            <a
              className='cursor-pointer font-medium text-fuschia hover:text-pink-500'
              href={person.linkedin || null}
              target='_blank'
              onClick={linkClick(person.name)}
              rel='noopener noreferrer'>
              {person.name}
            </a>
            <div className='italic'>{person.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Thanks
