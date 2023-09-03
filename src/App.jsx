import React from 'react'
import Buttons from './components/Buttons'
import StartGameNotice from './components/StartGameNotice'
import Questions from './components/QuestionsSection'
import Highscores from './components/Highscores'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

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


  return (
    <div className='bg-black flex flex-col items-center justify-center min-h-screen p-[5%] font-poppins'>
      <Routes>
        <Route path="/" element={<Buttons />} />
        <Route path="/StartGameNotice" element={<StartGameNotice />} />
        <Route path="/Highscores" element={<Highscores />} />
        <Route path="/Questions" element={<Questions />} />
        <Route path="/Highscores" element={<Highscores />} />
      </Routes>

      {/* <Component score={score} setScore={setScore} name={name} setName={setName} highscores={highscores} setHighscore={setHighscore} addScoreToHighscore={addScoreToHighscore} deleteScoreFromHighscore={deleteScoreFromHighscore}/> */}
    </div>
  )
}

export default App
