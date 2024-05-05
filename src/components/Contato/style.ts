import InputMask from 'react-input-mask'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  width: 400px;
  max-width: 100%;
  border: 1px solid ${variaveis.cinza};
  border-radius: 8px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
`

export const AccordionBtn = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  background-color: ${variaveis.branco};
  border: none;
  cursor: pointer;
  border-bottom: 1px solid ${variaveis.cinza};
`
export const Icon = styled.span`
  font-size: 20px;
  text-align: right;
`

export const AccordionConteudo = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
`

export const StyledInputMask = styled(InputMask)`
  height: 32px;
`
export const EmailInput = styled.input`
  height: 32px;
  margin-bottom: 32px;
`

export const Nome = styled.h2`
  font-weight: bold;
`

export const BarraDeAcoes = styled.div`
  border-top: 1px solid ${variaveis.cinza};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 8px;
`

export const Botao = styled.button`
  border: none;
  padding: 8px;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  margin-left: 8px;
`

export const BotaoEditar = styled(Botao)`
  background-color: ${variaveis.azul};
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelaRemove = styled(Botao)`
  background-color: ${variaveis.vermelo};
`
