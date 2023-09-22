import React from 'react'
import { TotalScore } from './TotalScore'
import { NumberSelector } from './NumberSelector'
import styled from 'styled-components';
import { RollDice } from './RollDice';

export const GamePlay = () => {
  return (
    <>
    <MainContainer>
   <div className="container">
   <TotalScore></TotalScore>
    <NumberSelector></NumberSelector>
   </div>
    </MainContainer>
    <RollDice></RollDice>
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
