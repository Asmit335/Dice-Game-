import styled from 'styled-components';

export const Button = styled.button `
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
    font-weight: 600;



    &:hover{
        border: 1px solid black;
        color: #111;
        background-color: #fff;
        transition: 0.3s  ease-in;
    }

    

`

export const OutlineBtn = styled(Button)
`
`