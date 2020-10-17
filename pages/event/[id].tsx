import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import classNames from 'classnames'
import { NonHomeNavbar } from '../../components/navbar'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStaticProps = async context => {
  const scheduleMap = await (await import('../../schedule-data')).scheduleMap
  const id = context.params.id as string
  const eventInfo = scheduleMap[id]
  return {
    props: { event: eventInfo },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const schedule = await (await import('../../schedule-data')).default
  const paths = schedule.map(event => ({ params: { id: event.id } }))

  return { paths, fallback: false }
}
const trackColors = ['border-fuschia', 'border-pond', 'border-tomato']

const EventPage = (props: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  const trackColor = props.event.track ? trackColors[props.event.track - 1] : trackColors[0]
  let joinText = null
  let joinColor = null

  if (props.event.joinLink.includes('hack.acmutd.co')) {
    if (props.event.ytLive) {
      joinText = 'YouTube Live'
      joinColor = '#FF0000'
    } else {
      joinText = 'Zoom Call'
      joinColor = '#2D8CFF'
    }
  } else {
    joinText = 'ACM Discord'
    joinColor = '#7289DA'
  }

  return (
    <>
      <Head>
        <title>{props.event.name} – ACM Hacktoberfest</title>
      </Head>
      <NonHomeNavbar />
      <main className='px-4 mt-32'>
        <div className='pb-8 font-medium text-fuschia my-0 mx-auto' style={{ maxWidth: '800px' }}>
          <Link href='/#schedule'>
            <a>&larr; Back to Schedule</a>
          </Link>
        </div>
        <div
          className={classNames(
            'py-8',
            'border-t-8',
            'text-center',
            'bg-aqua',
            'rounded-md',
            'my-0',
            'mx-auto',
            trackColor
          )}
          style={{ maxWidth: '800px' }}>
          <h1
            className='text-3xl lg:text-4xl xl:text-4xl font-medium text-center mx-auto my-0 w-full'
            style={{ maxWidth: '550px' }}>
            {props.event.name}
          </h1>
          {props.event.partner && (
            <h3 className='text-xl py-2 italic'>Partner – {props.event.partner}</h3>
          )}
          <h4 className='text-lg'>{props.event.timeStr}</h4>
          <a href={props.event.joinLink} target='_blank' rel='noreferrer'>
            <button
              className='mt-4 px-6 py-2 text-center text-white font-bold rounded-full'
              style={{ backgroundColor: joinColor }}>
              {joinText === 'ACM Discord' ? 'Open' : 'Join'} {joinText}
            </button>
          </a>
          <div className='mt-8 max-w-2xl px-6 text-left my-0 mx-auto'>
            {props.event.description}
          </div>
        </div>
      </main>
    </>
  )
}

export default EventPage
