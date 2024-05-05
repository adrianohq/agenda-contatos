import { useState } from 'react'
import { AccordionBtn, AccordionConteudo, BarraDeAcoes, Card } from './style'

const Contato = () => {
  const [expandir, setExpandir] = useState(false)

  const acionaAccordion = () => {
    setExpandir(!expandir)
  }

  return (
    <Card>
      <AccordionBtn onClick={acionaAccordion}>
        <h2>Maria da Silva da Silva</h2>
      </AccordionBtn>
      {expandir && (
        <AccordionConteudo>
          <p>00000-0000</p>
          <p>joão@joão.com</p>
          <BarraDeAcoes>
            <button>Editar</button>
            <button>Remover</button>
          </BarraDeAcoes>
        </AccordionConteudo>
      )}
    </Card>
  )
}

export default Contato
