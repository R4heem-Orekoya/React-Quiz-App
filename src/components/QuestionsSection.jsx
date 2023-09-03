import React, { Children } from 'react'
import { useState } from 'react'
import questionsArray from './questionsArray'
import Lastpage from './Lastpage';
import Quiz from "./Quiz";


export default function QuestionsSection({ score, setScore, name, setName, addScoreToHighscore }) {
    const [count, setCount] = useState(0);



    return (
        <div className='w-[400px] max-w-[100%] text-white'>
            {count === questionsArray.length? 
                <Lastpage score={score} name={name} setName={setName} setScore={setScore} addScoreToHighscore={addScoreToHighscore}/>
                : 
                <Quiz count={count} setCount={setCount} score={score} setScore={setScore} />
            }
        </div>
    )

}