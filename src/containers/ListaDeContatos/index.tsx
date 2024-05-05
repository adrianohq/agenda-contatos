import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import { Container, Titulo } from './styles'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state.contato)
  return (
    <Container>
      <Titulo>Lista de Contatos</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
              nome={c.nome}
              telefone={c.telefone}
              email={c.email}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
