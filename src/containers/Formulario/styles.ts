import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'

export const CardForm = styled.div`
  width: 400px;
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
`
export const Form = styled.form`
  padding-bottom: 32px;
`

export const BotaoAdd = styled.button`
  border: none;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background-color: ${variaveis.verde};
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`
