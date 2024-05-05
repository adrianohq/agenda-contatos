import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  contatos: Contato[]
}

const initialState: ContatosState = {
  contatos: [
    {
      id: 1,
      nome: 'Maria da Silva Silva',
      email: 'maria@maria.com',
      telefone: '61123456789'
    },
    {
      id: 2,
      nome: 'João da Silva Silva',
      email: 'joao@joao.com',
      telefone: '61987654321'
    },
    {
      id: 3,
      nome: 'Joana da Silva Silva',
      email: 'joana@joana.com',
      telefone: '00159732468'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.contatos.find(
        (contato) => contato.telefone === action.payload.telefone
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse número de telefone')
      } else {
        const ultimoContato = state.contatos[state.contatos.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.contatos.push(contatoNovo)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.contatos = state.contatos.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.contatos.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (index >= 0) {
        state.contatos[index] = action.payload
      }
    }
  }
})

export const { adicionar, editar, remover } = contatosSlice.actions

export default contatosSlice.reducer
