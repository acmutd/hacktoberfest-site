import { useEffect, useState } from 'react'
import classNames from 'classnames'
import ScheduleEvent, { ScheduleEventMobile } from './schedule-event'
import schedule from '../schedule-data'
import useWindowDimensions from '../util/use-window-dimensions'
import firebase from '../services/firebase'

const Schedule = (): JSX.Element => {
  const { width } = useWindowDimensions()
  const [scheduleShown, setScheduleShown] = useState(false)

  useEffect(() => {
    setScheduleShown(true)
  }, [])

  const scheduleToggle = () => {
    firebase
      .analytics()
      .logEvent('schedule_toggle', { toShown: !scheduleShown, content_id: 'schedule_v1' })
    setScheduleShown(!scheduleShown)
  }

  return (
    <div className='mt-10'>
      <h2 className='font-bold text-4xl flex items-center justify-center'>
        <img src='/img/sparkles.svg' className='-ml-16 -mt-6 h-3 absolute z-10' alt='' />
        <img src='/img/leaf-2.svg' className='ml-20 mt-3 h-6 absolute z-10' alt='' />
        <span className='z-0'>Schedule</span>
      </h2>

      <div className='my-4 flex items-center'>
        <button
          className='my-0 mx-auto text-md font-medium text-fuschia text-center cursor-pointer'
          onClick={scheduleToggle}>
          {scheduleShown ? 'Hide' : 'Show'} Schedule
        </button>
      </div>

      {scheduleShown && (
        <div className='mt-2 mb-8 text-center'>
          <div
            className={classNames(
              'flex',
              width >= 1000 ? 'flex-row' : 'flex-col',
              'items-center',
              'justify-center',
              'text-center'
            )}>
            <div className='mr-4 py-2'>
              <div className='py-1 px-2 inline bg-fuschia'>&emsp;</div>&emsp;
              <span className='font-medium text-lg'>ACM Track Events</span>
            </div>
            {width >= 1000 && (
              <span>
                <span className='text-3xl px-4'>/</span>&emsp;
              </span>
            )}
            <div className='mr-4 py-2'>
              <div className='py-1 px-2 inline bg-pond'>&emsp;</div>&emsp;
              <span className='font-medium text-lg'>Student Org Events</span>
            </div>
            {width >= 1000 && (
              <span>
                <span className='text-3xl px-4'>/</span>&emsp;
              </span>
            )}
            <div className='mr-4 py-2'>
              <div className='py-1 px-2 inline bg-tomato'>&emsp;</div>&emsp;
              <span className='font-medium text-lg'>Community Events</span>
            </div>
          </div>
        </div>
      )}
      {scheduleShown && (
        <div className='schedule-wrapper'>
          <div className={classNames(width >= 1000 && 'schedule', 'mx-auto', 'px-2')}>
            {schedule.map((event, idx) => {
              return (
                width >= 1000 && (
                  <ScheduleEvent
                    trackNumber={event.track}
                    offset={event.offset}
                    eventLength={event.length}
                    name={event.name}
                    wide={event.wide}
                    doubled={event.doubled}
                    timeStr={event.timeStr}
                    key={idx}
                    id={event.id}
                  />
                )
              )
            })}
            {schedule.map((event, idx) => {
              return (
                width < 1000 && (
                  <ScheduleEventMobile
                    trackNumber={event.track}
                    offset={event.offset}
                    eventLength={event.length}
                    name={event.name}
                    wide={event.wide}
                    doubled={event.doubled}
                    timeStr={event.timeStr}
                    key={idx}
                    id={event.id}
                  />
                )
              )
            })}
          </div>
        </div>
      )}
      <style jsx>{`
        .schedule-wrapper {
          margin: 0 auto;
          max-width: 1000px;
        }
        .schedule {
          display: grid;
          grid-auto-flow: column;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(58, 1fr);
          grid-column-gap: 20px;
          grid-row-gap: 5px;
          height: 2700px;
        }
      `}</style>
    </div>
  )
}

export default Schedule
