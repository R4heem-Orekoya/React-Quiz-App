import React from 'react'
import questionsArray from './questionsArray';

export default function Quiz({score, setScore, count, setCount}) {

    const changeQuestion = () => {
        setCount(count + 1);
    }

    const getUserAnswer = (event) => {
        let userAnswer = event.target.innerText
        if(userAnswer === questionsArray[count].a){
            setScore(score + 10); 
        } 
    }

  return (
    <div>
        <div className='flex justify-between items-center'>
            <p className='font-lg'>Question {count + 1} of {questionsArray.length}</p>

            <div className='flex flex-col items-center'>
                <p className='font-bold text-5xl'>{score}</p>
                <p>SCORE</p>
            </div>
        </div>

        <div className='mt-10'>
            <p className='text-xl font-semibold md:text-3xl'>
                {questionsArray[count].q}
            </p>
        </div>

        <div className='flex flex-col gap-4 mt-10'>
            {
                questionsArray[count].ops.map(item => 
                    <div 
                        onClick={
                            (event) => {
                                getUserAnswer(event); 
                                changeQuestion();
                            }
                        } 
                        key={item} 
                        className='bg-gradient-to-r from-blue-600 to-purple-700 w-[100%] p-3 md:p-4 text-lg text-center rounded-lg cursor-pointer active:scale-95 duration-300'> 
                        {item}
                    </div>
            )}
        </div>
    </div>
  )
}
