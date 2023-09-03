import React from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';

export default function Highscores({highscores, deleteScoreFromHighscore}) {
    const sortedHighscores = [...highscores].sort((a, b) => b.score - a.score);

  return (
    <div className='flex flex-col items-center w-[450px] max-w-[100%] text-white'>
      <h2 className='text-3xl font-bold mb-5 md:text-5xl md:mb-10'>Highscores</h2>

      {highscores.length === 0 ? 
            <p className='text-lg font-medium md:text-2xl mb-5'>There are currently no highscores.</p>
        : 
            <div className='w-[100%] mb-[100px]'>
                <div className='flex justify-between w-[100%] text-xl md:text-2xl border-b-2 border-blue-400 pb-4'>
                    <span>Name</span>
                    <span>Score</span>
                </div>

                <ul className='mt-5 flex flex-col gap-4'>

                    {
                        sortedHighscores.map((highscore) => (
                            <li className='flex justify-between text-lg' key={highscore.id}>
                                <span>{highscore.name}</span>
                                <span>{highscore.score}</span>
                            </li>
                        ))
                    }
                </ul>

            </div>
        }

        <div className='flex flex-col gap-4'>
            {highscores.length !== 0?
            <Button href='/Highscores' onClick={deleteScoreFromHighscore}>
                Clear
            </Button>:''}

            <Link to='/React-Quiz-App'>
                <Button>
                    Back to home
                </Button>
            </Link>
        </div>

    </div>
  )
}
