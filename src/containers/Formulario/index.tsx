import { FormEvent, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { adicionar } from '../../store/reducers/contatos'
import { Titulo } from '../ListaDeContatos/styles'
import { Campo } from '../../styles'
import { BotaoAdd, CardForm, Form } from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const limitarTelefone = (evento: ChangeEvent<HTMLInputElement>) => {
    const { value } = evento.target
    if (value.length <= 11) {
      setTelefone(value)
    }
  }

  const adicionarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      adicionar({
        nome,
        telefone,
        email
      })
    )
    navigate('/')
  }

  return (
    <CardForm>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={adicionarContato}>
        Nome
        <Campo
          required
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Insira o nome aqui"
        />
        Telefone
        <Campo
          required
          value={telefone}
          onChange={limitarTelefone}
          type="number"
          placeholder="Insira o telefone aqui"
        />
        E-mail
        <Campo
          required
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="Insira o e-mail aqui"
        />
        <BotaoAdd type="submit">Adicionar</BotaoAdd>
      </Form>
    </CardForm>
  )
}

export default Formulario
