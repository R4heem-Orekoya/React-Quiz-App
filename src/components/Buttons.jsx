import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function Buttons(props) {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
    <h2 className='text-white text-3xl font-semibold mb-10'>Are You Ready?</h2>
      <Link to='/React-Quiz-App/StartGameNotice'>
        <Button>Start Quiz</Button>
      </Link>

      <Link to='/React-Quiz-App/Highscores'>
        <Button>High Scores</Button>
      </Link>
    </div>
  )
}
