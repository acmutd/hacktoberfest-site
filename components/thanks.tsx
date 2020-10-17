import credits, { CreditsType } from '../credits'
import firebase from '../services/firebase'

const Thanks = (): JSX.Element => {
  const categories = ['leadership', 'developers', 'creative', 'outreach/liasons', 'logistics']
  return (
    <div className='mt-20 text-center'>
      <h2 className='font-bold text-4xl flex items-center justify-center'>
        <img src='/img/sparkles.svg' className='-ml-20 pl-4 -mt-6 h-3 absolute z-10' alt='' />
        <span className='z-0'>Our Team</span>
      </h2>
      <div className='text-md mb-8 text-center max-w-sm my-0 mx-auto'>
        This event wouldn&apos;t have been possible without our amazing ACM team working behind the
        scenes.
      </div>
      {categories.map(cat => (
        <div className='py-2 mx-auto my-0' style={{ maxWidth: '900px' }} key={cat}>
          <h1 className='text-xl'>{cat}</h1>
          <div
            className='flex flex-wrap flex-row justify-evenly px-4 mx-auto my-0'
            style={{ maxWidth: '1000px' }}>
            {credits
              .filter(cr => cr.role === cat)
              .map(person => (
                <PersonCredit person={person} key={person.name} />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const PersonCredit = (props: { person: CreditsType }): JSX.Element => {
  const linkClick = (name: string) => () => {
    firebase.analytics().logEvent('credits_link_click', {
      name,
    })
  }
  return (
    <div className='p-4 flex justify-start flex-col items-start'>
      <a
        className='cursor-pointer font-medium text-fuschia hover:text-pink-500'
        href={props.person.linkedin || null}
        target='_blank'
        onClick={linkClick(props.person.name)}
        rel='noopener noreferrer'>
        {props.person.name}
      </a>
      <div className='italic'>{props.person.title}</div>
    </div>
  )
}

export default Thanks
