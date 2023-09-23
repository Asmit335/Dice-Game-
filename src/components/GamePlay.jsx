import React from 'react'
import { TotalScore } from './TotalScore'
import { NumberSelector } from './NumberSelector'
import styled from 'styled-components';
import { RollDice } from './RollDice';
import { useState } from 'react';
import { Button, OutlineBtn } from './Button';

export const GamePlay = () => {

  const [selectedNumber, setSelectedNumber] = useState();
  const [currrentDice, setcurrrentDice] = useState(2);
  const [score, setscore] = useState(0)
  const [errorMessage, setErrorMessage] = useState('');
  const [imagerules, setImagerules] = useState(false)


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

    const handleRules =()=>{
      setImagerules(!imagerules)
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
    <RollDice
    currrentDice={currrentDice}
    // setcurrrentDice={setcurrrentDice}
    generateRandomNumber={generateRandomNumber}
    ></RollDice>

     
    
      <div className="flexBtn">


    <OutlineBtn>Reset</OutlineBtn>
    <Button onClick={handleRules}>Show Rules</Button>
      </div>

      <div className="rulesImg">

      {
        setImagerules && (<img src='/images/rules.png' alt='loading'></img>) 
      }
      </div>


     
    
      

    </MainContainer>

    </>
  )
}

const MainContainer=styled.main`
padding-top: 5rem;
  .container{
    display: flex;
    justify-content: space-around;
  }
 
  .flexBtn{
    display: flex;
    margin-top: 1.5rem;
    gap: 1rem;
    flex-direction: column;

  }

  .rulesImg{
    display: flex;
    justify-content: center;
  }
`

