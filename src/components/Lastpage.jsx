import React, { useState } from 'react'
import questionsArray from './questionsArray'
import Button from './Button';
import { Link } from 'react-router-dom';




export default function Lastpage({score, setScore, name, setName, addScoreToHighscore}) {
    const [warning, setWarning] = useState(false);
    const [path, setPath] = useState('/React-Quiz-App/')

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
            <a href={path}>
                <Button 
                    onClick={
                        () => {
                            if(name === ''){
                                setWarning(true)
                                setPath('/React-Quiz-App/Questions#')
                                return
                            }
                            else{
                                setWarning(false)
                                setPath('/React-Quiz-App/')
                                addScoreToHighscore()
                            }

                            setName('')
                        }
                    }>
                    Save
                </Button>
            </a>

                <Button 
                    onClick={()=>{
                        window.location.reload();
                    }
                }>
                    Play Again
                </Button>

            <Link to="/React-Quiz-App">
                <Button 
                    onClick={()=>{
                        setScore(0)
                    }
                }>
                    Back to home
                </Button>
            </Link>

        </div>
    </div>
  )
}
