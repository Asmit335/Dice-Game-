import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

export const NumberSelector = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

  return (
    <>
     <NumberSelector1>
     <div className='numbers'>
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            onClick={() => setSelectedNumber(value)}
            key={i}
          >
            <h1>{value}</h1>
          </Box>
        ))}
        
      </div>
      <h3>Select Number</h3>
     </NumberSelector1>
    </>
  );
};


const NumberSelector1=styled.div`
    .numbers{
        display: flex;
        gap: 1.5rem;
    }
    h3{
        float: right;
        
    }
`

const Box = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  border: 1px solid #111;
  cursor: pointer;
  background: ${(props) => (props.isSelected ? 'black' : 'white')};
  color: ${(props) => (props.isSelected ? '#fff' : '#111')};

 
`;
