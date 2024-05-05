import { useState, useEffect } from 'react'
import * as S from './style'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { useDispatch } from 'react-redux'

type Props = ContatoClass

const Contato = ({
  id,
  nome,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [expandir, setExpandir] = useState(false)

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  const formatarTelefone = (telefone: string) => {
    if (telefone) {
      const telefoneFormatado = `(${telefone.slice(0, 2)}) ${telefone.slice(
        2,
        7
      )}-${telefone.slice(7)}`
      return telefoneFormatado
    } else {
      return ''
    }
  }

  const acionaAccordion = () => {
    setExpandir(!expandir)
  }

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      <S.AccordionBtn onClick={acionaAccordion}>
        <S.Nome>
          {estaEditando && <em>Editando: </em>}
          {nome}
        </S.Nome>
        <S.Icon>{expandir ? '-' : '+'}</S.Icon>
      </S.AccordionBtn>
      {expandir && (
        <S.AccordionConteudo>
          {estaEditando ? (
            <>
              <S.StyledInputMask
                mask="(99) 9999-9999"
                value={telefone}
                onChange={(evento) => setTelefone(evento.target.value)}
              />
              <S.EmailInput
                type="email"
                disabled={!estaEditando}
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
              />
            </>
          ) : (
            <>
              <span>{formatarTelefone(telefone)}</span>
              <span>{email}</span>
            </>
          )}
          <S.BarraDeAcoes>
            {estaEditando ? (
              <>
                <S.BotaoSalvar
                  onClick={() => {
                    dispatch(
                      editar({
                        id,
                        nome,
                        telefone,
                        email
                      })
                    )
                    setEstaEditando(false)
                  }}
                >
                  Salvar
                </S.BotaoSalvar>
                <S.BotaoCancelaRemove onClick={cancelarEdicao}>
                  Cancelar
                </S.BotaoCancelaRemove>
              </>
            ) : (
              <>
                <S.BotaoEditar onClick={() => setEstaEditando(true)}>
                  Editar
                </S.BotaoEditar>
                <S.BotaoCancelaRemove onClick={() => dispatch(remover(id))}>
                  Remover
                </S.BotaoCancelaRemove>
              </>
            )}
          </S.BarraDeAcoes>
        </S.AccordionConteudo>
      )}
    </S.Card>
  )
}

export default Contato
