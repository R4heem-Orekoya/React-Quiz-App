import React, { useState } from 'react'
import questionsArray from './questionsArray'
import Button from './Button';




export default function Lastpage({score, name, setName, addScoreToHighscore}) {
    const [warning, setWarning] = useState(false);
    const [path, setPath] = useState('/')

  return (
    <div className='flex flex-col items-center justify-center gap-5'>
        <p className='text-3xl md:text-5xl'>{score === questionsArray.length * 10? '✊': score >= 70? '😀': score >= 50? '👍': score >= 30? '😔': '🙅‍♂️🙅‍♀️👎'}</p>
        <div className='flex flex-col items-center mt-5'>
            <p className='font-bold text-5xl'>{score}</p>
            <p>YOUR SCORE</p>
        </div>

        <input 
            defaultValue={name} 
            onChange={
                e => {
                    setName(e.target.value)
            }
            } 
            type="text" placeholder='Your name' className='text-black  max-w-[100%] w-[300px] h-[50px] pl-3 mt-2 text-xl placeholder:text-black outline-none rounded-lg'/>

        <p className={warning === false?'self-start tex-md text-red-500 hidden':'self-start tex-md text-red-500'}>Name can't be empty</p>

        <div className='flex flex-col gap-4 mt-4'>
            <Button href={path}
                onClick={
                    () => {
                        if(name === ''){
                            setWarning(true)
                            setPath('#')
                            return
                        }
                        else{
                            setWarning(false)
                            setPath('/')
                            addScoreToHighscore()
                        }
                    }
                }>
                Save
            </Button>

            <Button href="/Questions">
                Play Again
            </Button>
            <Button href="/">
                Back to home
            </Button>
        </div>
    </div>
  )
}
