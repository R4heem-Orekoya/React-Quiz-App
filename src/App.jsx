import React from 'react'
import Buttons from './components/Buttons'
import StartGameNotice from './components/StartGameNotice'
import Questions from './components/QuestionsSection'
import Highscores from './components/Highscores'
import { useState, useEffect } from 'react'

function App() {
  const [score, setScore] = useState(0);
  const [name, setName] = useState('');


  const [highscores, setHighscore] = useState(() => {
    const localHighscores = localStorage.getItem('high')
    
    if(localHighscores == null) return []

    return JSON.parse(localHighscores)
  });


  useEffect(()=>{
    localStorage.setItem('high', JSON.stringify(highscores))
  }, [highscores])

  const addScoreToHighscore = () => {
    setHighscore([
      ...highscores, {name: name, score: score, id: crypto.randomUUID()}
    ])
  }

  const deleteScoreFromHighscore = () =>{
    setHighscore([])
  }



  let Component = Buttons;
  switch (window.location.pathname){
    case '/' :
      Component = Buttons
      break
    case '/StartGameNotice':
      Component = StartGameNotice
      break
    case '/Questions':
      Component = Questions
      break
    case '/Highscores':
      Component = Highscores
      break
  }


  return (
    <div className='bg-black flex flex-col items-center justify-center min-h-screen p-[5%] font-poppins'>
      <Component score={score} setScore={setScore} name={name} setName={setName} highscores={highscores} setHighscore={setHighscore} addScoreToHighscore={addScoreToHighscore} deleteScoreFromHighscore={deleteScoreFromHighscore}/>
    </div>
  )
}

export default App
