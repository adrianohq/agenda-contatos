import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Poppins", sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    background-color: #fefaf1;
  }
`

export const Campo = styled.input`
  width: 100%;
  height: 32px;
  margin-bottom: 8px;
  display: block;
`

export default EstiloGlobal
