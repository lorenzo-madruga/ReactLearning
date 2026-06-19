import './formulario-de-evento.estilos.css'
import { TituloFormulario } from '../TituloFormulario'
import { Label } from '../Label'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { SelectDeFormulario } from '../SelectDeFormulario'
import { BotaoDeFormulario } from '../BotaoDeFormulario'

export function FormularioDeEvento() {

  return (
    <form className="formulario-evento">

      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nome">Nome do evento:</Label>
          <CampoDeEntrada type="text" id="nome" name="nome" placeholder="Summer dev hits" required/>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento:</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" required />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="temaEvento">Tema do evento:</Label>
          <SelectDeFormulario id="temaEvento" name="temaEvento" required>
            <option value="">Selecione um tema</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="negocios">Negócios</option>
            <option value="design">Design</option>
          </SelectDeFormulario>
        </CampoDeFormulario>
      </div>
      <div className="actions">
        <BotaoDeFormulario type="submit">Criar evento</BotaoDeFormulario>
      </div>
    </form>
  )
}