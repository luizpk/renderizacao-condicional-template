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


  
  /* UTILIZANDO IF/ELSE */

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





/* UTILIZANDO SWITCH CASE*/

  // switch (tela) {
  //   case 1:
  //     return (
  //     <MainContainer >
    //     <GlobalStyled />
    //     <TelaLogin />
  //     </MainContainer>);
  //   case 2:
  //     return (
  //     <MainContainer >
    //     <GlobalStyled />
    //     <TelaCadastro />
  //     </MainContainer>
  //     );
    
  //   default:
  //     console.log("Pagina não encontrada."); 

  // }



 
/* UTILIZANDO EXPRESSIONS (TERNÁRIO) */



  // return (
  //   <MainContainer >
  //     <GlobalStyled />

  //     {/*condição ? true : false*/}
  //     {tela === 1 ? <TelaLogin /> : <TelaCadastro />}
    
  //   </MainContainer>);



  // UTILIZANDO EXPRESSIONS (CURTO-CIRCUITO)


  return (
      <MainContainer >
        <GlobalStyled />

        {tela && <TelaLogin/> || <TelaCadastro /> }

        
      </MainContainer>
  );


}

export default App;