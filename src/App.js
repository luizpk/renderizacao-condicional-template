import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {

  const [tela, setTela] = useState(1);

  /* Utilizando if/else*/

  // if (tela===1){

  //   return (
  //     <MainContainer >
  //       <GlobalStyled />
  //       <TelaLogin />
  //       </MainContainer>
  //   );
  // } else {
  //   return (
  //     <MainContainer >
  //       <GlobalStyled />
  //       <TelaCadastro />
  //     </MainContainer>
  //   );
  // }

/* utilizando switch case*/

  switch (tela) {
    case 1:
      return (
      <MainContainer >
      <GlobalStyled />
      <TelaLogin />
      </MainContainer>);
    case 2:
      return (
      <MainContainer >
      <GlobalStyled />
      <TelaCadastro />
      </MainContainer>
      );
    
    default:
      console.log("Pagina não encontrada."); 

  }


  
}

export default App;