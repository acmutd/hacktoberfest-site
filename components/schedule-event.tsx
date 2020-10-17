import Link from 'next/link'
import classNames from 'classnames'

type ScheduleEventProps = {
  eventLength: number
  trackNumber?: number
  wide?: boolean
  doubled?: boolean
  offset?: number
  name: string
  timeStr: string
  id: string
}

const rowSpans = [
  'row-span-1',
  'row-span-2',
  'row-span-3',
  'row-span-4',
  'row-span-5',
  'row-span-6',
]

const trackNumbers = ['col-start-1', 'col-start-2', 'col-start-3']
const trackColors = ['border-fuschia', 'border-pond', 'border-tomato']

const ScheduleEvent = (props: ScheduleEventProps): JSX.Element => {
  const numRows = Math.floor(props.eventLength / 15)
  const rowSpan = rowSpans[numRows - 1]
  const trackNumber = props.trackNumber ? trackNumbers[props.trackNumber - 1] : 'col-start-1'
  const trackColor = props.trackNumber ? trackColors[props.trackNumber - 1] : trackColors[0]
  return (
    <Link href={`/event/${props.id}`}>
      <div
        className={classNames(
          props.wide ? 'col-span-3' : props.doubled ? 'col-span-2' : 'col-span-1',
          trackNumber,
          rowSpan,
          'bg-aqua',
          'rounded-md',
          props.eventLength < 30 ? 'p-0' : 'p-4',
          props.eventLength >= 30 ? 'pl-6' : 'pl-2',
          'text-white',
          'border-l-8',
          trackColor,
          'flex',
          'items-center',
          'transform',
          'hover:text-gray-500',
          'cursor-pointer',
          'transition-all',
          'ease-in-out',
          'duration-200'
        )}
        style={{
          gridRowStart: props.offset + 1 || '0',
        }}>
        <div className={classNames(props.eventLength < 30 && 'flex flex-row items-center')}>
          <h4 className={classNames('font-medium', props.eventLength < 30 ? 'text-md' : 'text-xl')}>
            {props.name}
          </h4>
          <h4
            className={classNames(
              props.eventLength >= 30 ? 'text-sm' : 'text-xs',
              props.eventLength < 30 && 'pl-2'
            )}>
            {props.timeStr}
          </h4>
        </div>
      </div>
    </Link>
  )
}

export const ScheduleEventMobile = (props: ScheduleEventProps): JSX.Element => {
  const trackColor = props.trackNumber ? trackColors[props.trackNumber - 1] : trackColors[0]
  return (
    <Link href={`/event/${props.id}`}>
      <div
        className={classNames(
          'bg-aqua',
          'rounded-md',
          props.eventLength < 30 ? 'p-0' : 'p-4',
          props.eventLength >= 30 ? 'pl-6' : 'pl-2',
          'text-white',
          'border-l-8',
          trackColor,
          'flex',
          'items-center',
          'my-2'
        )}>
        <div className={classNames(props.eventLength < 30 && 'flex flex-row items-center')}>
          <h4
            className={classNames(
              'font-medium',
              props.eventLength < 30 ? 'sm:text-sm text-md' : 'text-xl'
            )}>
            {props.name}
          </h4>
          <h4
            className={classNames(
              props.eventLength >= 30 ? 'text-sm' : 'text-xs',
              props.eventLength < 30 && 'pl-2'
            )}>
            {props.timeStr}
          </h4>
        </div>
      </div>
    </Link>
  )
}

export default ScheduleEvent
