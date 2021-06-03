import React from 'react';
import { useHistory } from "react-router";
import styled from "styled-components";
import {MonumentosLogoUrl} from "../../constants";

export const HomePage = ({setPlace}) =>{
    
    const [input, setInput] = React.useState(""); 
    const history= useHistory();

    function handleSearchClick(){
      setPlace(input.toLowerCase());
      history.replace("/map");
    }

    function handleInputChange(event){
      setInput(event.target.value);
    }
    
    

    return (
      <Home width='20px'>
        <Wrapper>
          <MonumentosLogo src={MonumentosLogoUrl} alt="Monumentos Logo"/>
            <FormWrapper>
              <InputWrapper >
              
              <SearchBar 
              placeholder="Busca un lugar" value={input} onChange={handleInputChange} type="text" 
              />
              
              </InputWrapper>
              <ButtonWrapper>
                <button onClick={handleSearchClick}>Buscar</button>

                <button onClick={handleSearchClick}>Probar suerte</button>   
              </ButtonWrapper> 
            </FormWrapper>
        </Wrapper>
      </Home>

    );
};


  const Home = styled.div`
width: 100vw;
height: 100vh;
display:flex;
justify-content: center;
align-items:center;
flex-direction:column;
background-image: url('https://img.wallpapersafari.com/desktop/1920/1080/8/75/bmYSFe.jpg')`

const Wrapper = styled.div`
width: 35%;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;

`

const MonumentosLogo = styled.img`
width: 75%;
margin-bottom:30px;
justify-content: center;

`

const ButtonWrapper= styled.div`
display:flex;
margin-top: 20px;
justify-content: center;
gap: 10px;

button{
  cursor:pointer;
  color:white;
  padding:15px;
  font-weight: 600;
  background-color:black;
  border:none;
  border-radius:6px;

  transition: all ease-out 0.5s;

  &:hover{
    filter:brightness(0.8);
    transform: translateY(-4px);
  }
}
`

const InputWrapper= styled.div`
display:flex;
flex-direction:row;
width: 70%;
height: 30px;
align-content:center;
align-self:center;

`

const FormWrapper= styled.div`
display:flex;
flex-direction:column;
width:100%;
`

const SearchBar = styled.input`
width: 100%;
height: 30px;
`