import './SelectFormulario.estilos.css'

export function SelectDeFormulario({ children }) {
    return (
       <select className="select-formulario">
            {children}
       </select> 
    )
}