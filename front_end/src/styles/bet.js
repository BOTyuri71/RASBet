import styled from 'styled-components'

export const HeaderSports = styled.div`
    width: 100%;
    height: 50px;
    padding-left: 10%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    background-color: #ffa927;
    font-style: Helvetica;
`;

export const DivBet = styled.div`
    background-color: #003001;
    height: 100vh;
    width:70%;
    display: flex;
    align-items: top;
`

export const SearchBar = styled.div`
    padding-top: 30px;
    width: 80%;
    height: 60px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;


export const Search = styled.form`
    width: 100%;
    height: 80%;
    border: 2px solid #000;
    border-radius: 2em;
    overflow: hidden;
    font-size: 1rem;
    display: flex;
    background-color: #fff;

    &:focus-within {
     box-shadow: 2px 2px 5px #000;
  }
`;

export const Button = styled.button`
    background-color: #fff;
    border: none;
    outline: none;
    width: 10%;
    font-size: 1.5rem;
    padding-right: 0.5em;
    color: gray;
    display: grid;
    place-content: center;
`

export const Input = styled.input`
    padding: 1em;
    width: 100%;
    background-color: #fff;
    border: none;
    outline: none;

`