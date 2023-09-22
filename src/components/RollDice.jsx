import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

export const RollDice = () => {

  const [currrentDice, setcurrrentDice] = useState(4);


  const generateRandomNumber=()=>{
  const randomNumber= Math.floor(Math.random() * 6) + 1;
  // console.log(randomNumber)
     setcurrrentDice(randomNumber)
  }

  return (
    <DicesPic>
        <div className='dicesContainer'>
        <img onClick={generateRandomNumber}  className='dices' src={`/images/dice${currrentDice}.png`} alt="loading" />
        </div>
     <h3>Click on Dice to roll</h3>
    </DicesPic>
  )
}

const DicesPic=styled.div`

display: flex;
align-items: center;
flex-direction: column;
cursor: pointer;
/* justify-content: center; */
margin-top: 3rem;

.dices{
    height: 250px;
    width: 250px;
    /* border: 2px solid red; */
}

`