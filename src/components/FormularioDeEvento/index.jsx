import './formulario-de-evento.estilos.css'
import { TituloFormulario } from '../TituloFormulario'
import { Label } from '../Label'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { SelectDeFormulario } from '../SelectDeFormulario'
import { BotaoDeFormulario } from '../BotaoDeFormulario'
import { ListaSuspensa } from '../ListaSuspensa'

export function FormularioDeEvento({ temas, aoSubmeter }) {

  function aoFormSubmetido(e) {
    e.preventDefault()
    const formData = new FormData(e.target)

    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    }

    aoSubmeter(evento)
  }

  return (
    <form className="formulario-evento" onSubmit={aoFormSubmetido}>

      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Nome do evento:</Label>
          <CampoDeEntrada type="text" id="nomeEvento" name="nomeEvento" placeholder="Summer dev hits" required/>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="capa">Qual a capa do evento?:</Label>
          <CampoDeEntrada type="text" id="capa" name="capa" placeholder="http://" required/>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento:</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" required />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="tema">Tema do evento:</Label>
          <SelectDeFormulario id="tema" name="tema" required>
            <ListaSuspensa itens={temas} />
          </SelectDeFormulario>
        </CampoDeFormulario>
      </div>
      <div className="actions">
        <BotaoDeFormulario type="submit">Criar evento</BotaoDeFormulario>
      </div>
    </form>
  )
}