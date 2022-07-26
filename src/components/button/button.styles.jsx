import styled from 'styled-components';

export const BaseButton = styled.button`
min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }

    @media screen and (max-width: 800px) {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px 0 10px;
    }
  
`

export const GoogleSinInButton = styled(BaseButton)`

      background-color: #4285f4;
      color: white;
      min-width: 250px;
      font-size: 12px;
      &:hover {
        background-color: #357ae8;
        border: none;
      }
`
export const InvertedButton = styled(BaseButton)`
    background-color: white;
      color: black;
      border: 1px solid black;
  
      &:hover {
        background-color: black;
        color: white;
        border: none;
      }

`


  