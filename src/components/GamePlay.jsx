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
        // console.log("Matched")
       }
       else{
        setscore(score - 1)
       }

       setSelectedNumber(undefined);
    }

    

    const handlereset=()=>{
      setscore(0);
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


    <OutlineBtn
    onClick={handlereset}
    >Reset</OutlineBtn>
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

`

