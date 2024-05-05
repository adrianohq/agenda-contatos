import Contato from '../../components/Contato'
import { Container, Titulo } from './styles'

const ListaDeContatos = () => {
  return (
    <Container>
      <Titulo>Lista de Contatos</Titulo>
      <button>Adicionar Contato</button>
      <ul>
        <Contato />
        <Contato />
        <Contato />
      </ul>
    </Container>
  )
}

export default ListaDeContatos
