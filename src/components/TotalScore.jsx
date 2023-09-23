import React from 'react'
import styled from 'styled-components';
export const TotalScore = ({score}) => {
  return (
    <>
    <TotalScoreCss>
      <div className="totalScore">
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
    </TotalScoreCss>
    </>
  )
}

const TotalScoreCss=styled.div`

max-width: 300px;
text-align: center;
  h1{
    font-size: 6rem;

  }
  p{
    font-size: 2.5rem;
    font-weight: 500;
  }

`