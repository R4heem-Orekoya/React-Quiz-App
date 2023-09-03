import React from 'react'
import questionsArray from './questionsArray'
import { Link } from 'react-router-dom'

export default function StartGameNotice() {
  return (
    <div className='flex flex-col bg-gray-900 w-[400px] max-w-[100%] text-center text-white py-5 px-4 rounded-xl'>
      <h1 className='text-3xl font-bold'>Note</h1>
      <p className='my-3 text-sm text-gray-300 sm:text-lg'>
        This quiz has {questionsArray.length} questions and each question carries 10 marks. 
        Click the start button to proceed with the quiz.
      </p>

      <div className='flex gap-4 mx-auto mt-4'>
        <Link to="/">
            <button className='ring-2 ring-indigo-600 px-6 py-3 text-sm rounded-lg active:scale-95 duration-300'>
                Go back
            </button>
        </Link>
        <Link to="/Questions">
            <button className='bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm rounded-lg active:scale-95 duration-300'>
                Continue
            </button>
        </Link>
      </div>
    </div>
  )
}
