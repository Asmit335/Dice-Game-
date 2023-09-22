import React from 'react'
import styled from 'styled-components';

export const StartGame = ({toggle}) => {

  

  return (
    
    <>
    <Container>
        <div>

    <img src="/images/dices.png" alt="" />
        </div>
    <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle} >Play Now</Button>

    </div>
    </Container>
    </>
  )
}

const Container=styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    align-items: center;
    margin: 0 auto;


    

    .content h1{
        font-size: 6rem;
        text-transform: uppercase;
        white-space: nowrap;
    }

`
const Button=styled.button`
    color: #fff;
    padding: 10px 18px;
    gap: 10px;
    width: 200px;
    background-color: #111;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    float: right;
    border: 1px solid transparent;
    transition: 0.4s  ease-in;



    &:hover{
        border: 1px solid black;
        color: #111;
        background-color: #fff;
        transition: 0.3s  ease-in;
    }

`
