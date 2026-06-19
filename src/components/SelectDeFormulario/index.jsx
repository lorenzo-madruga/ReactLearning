import './SelectFormulario.estilos.css'

export function SelectDeFormulario({ children, ...rest }) {
    return (
       <select {...rest} className="select-formulario">
            {children}
       </select>
    )
}