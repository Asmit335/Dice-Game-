import React from 'react'
import { StartGame } from './components/StartGame'
import { useState } from 'react';
import { GamePlay } from './components/GamePlay';

const App = () => {


  const [gameStarted, setgameStarted] = useState(false);

  const toggleGamePlay=()=>{
      setgameStarted((prev)=>!prev)
  }

  return (
    <>
    {/* <StartGame></StartGame> */}
   {
    gameStarted ? <GamePlay></GamePlay> : <StartGame   toggle={toggleGamePlay}></StartGame>
   }
    
    </>
  )
}

export default App