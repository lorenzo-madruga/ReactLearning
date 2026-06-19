import './BotaoFormulario.estilos.css'

export function BotaoDeFormulario({ children }) {
    return (
        <button className="botao-formulario">
            {children}
        </button>
    )
}