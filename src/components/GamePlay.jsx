import React from 'react'
import { TotalScore } from './TotalScore'
import { NumberSelector } from './NumberSelector'
import styled from 'styled-components';
import { RollDice } from './RollDice';
import { useState } from 'react';

export const GamePlay = () => {

  const [selectedNumber, setSelectedNumber] = useState();
  const [currrentDice, setcurrrentDice] = useState(2);
  const [score, setscore] = useState(0)
  const [errorMessage, setErrorMessage] = useState('');


  const generateRandomNumber=()=>{


    if(!selectedNumber){
      setErrorMessage("Please Select The Number.")
      return;
    }
    // setErrorMessage("")

    const randomNumber= Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber)
       setcurrrentDice(randomNumber)
  
       if(randomNumber===selectedNumber){
        setscore(score + randomNumber)
        console.log("Matched")
       }
       else{
        setscore(score - 1)
       }

       setSelectedNumber(undefined);
    }

  return (
    <>
    <MainContainer>
   <div className="container">
   <TotalScore
   score={score}
   ></TotalScore>
    <NumberSelector
    errorMessage={errorMessage}
    setErrorMessage={setErrorMessage}
    selectedNumber={selectedNumber}
    setSelectedNumber={setSelectedNumber}
    ></NumberSelector>
   </div>
    </MainContainer>
    <RollDice
    currrentDice={currrentDice}
    // setcurrrentDice={setcurrrentDice}
    generateRandomNumber={generateRandomNumber}
    ></RollDice>

    </>
  )
}

const MainContainer=styled.main`
padding-top: 5rem;
  .container{
    display: flex;
    justify-content: space-around;
  }
`

