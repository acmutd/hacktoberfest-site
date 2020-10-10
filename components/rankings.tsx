import { useState, useEffect } from 'react'
import { firestore } from '../services/firebase'

interface RankingUser {
  discord: string
  email: string
  name: string
  points: number
}

const Rankings = (): JSX.Element => {
  const [leaders, setLeaders] = useState<RankingUser[]>([])

  useEffect(() => {
    console.log('[LEADERBOARD] Begin listening')
    const stopListening = firestore
      .collection('htf_leaderboard/snowflake_to_all/mapping')
      .orderBy('points', 'desc')
      .limit(30)
      .onSnapshot(querySnapshot => {
        console.log('[LEADERBOARD] Updated')
        setLeaders(
          querySnapshot.docs.map(doc => {
            const data = doc.data()
            const user: RankingUser = {
              discord: data.discord,
              email: data.email,
              name: data.name,
              points: data.points,
            }
            return user
          })
        )
      })
    return () => {
      console.log('[LEADERBOARD] Cleanup')
      stopListening()
    }
  }, [firestore])

  return (
    <div className='mx-auto my-0 px-4' style={{ maxWidth: '700px' }}>
      <div className='px-2 my-2 flex flex-row items-center justify-between w-full rounded-lg'>
        <div className='text-md font-semibold uppercase'>Participant</div>
        <div className='text-md font-semibold uppercase'>Points</div>
      </div>
      {leaders.length === 0 && (
        <div className='py-6 text-center w-full text-fuschia text-lg'>loading leaderboard...</div>
      )}
      {leaders.length > 0 && (
        <div>
          {leaders.map(leader => (
            <div
              className='p-4 my-2 bg-aqua flex flex-row items-center justify-between w-full rounded-lg'
              key={leader.discord}>
              <div className='text-lg'>{leader.name}</div>
              <div className='text-xl font-medium'>{leader.points}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Rankings
