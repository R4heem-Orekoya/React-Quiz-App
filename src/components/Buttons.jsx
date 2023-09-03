import React from 'react'
import Button from './Button'

export default function Buttons(props) {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
    <h2 className='text-white text-3xl font-semibold mb-10'>Are You Ready?</h2>
      <Button to='/StartGameNotice'>Start Quiz</Button>
      <Button to='/Highscores'>High Scores</Button>
    </div>
  )
}
