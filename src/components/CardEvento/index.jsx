import './cardEvento.estilos.css'

export function CardEvento({ evento }) {
    return (
        <div className='card-evento'>
            {evento.capa ? (
                <img className='image' src={evento.capa} alt={evento.titulo || ''} />
            ) : null}
            <div className='corpo'>
                <p className='tag'>
                    {evento.tema ? evento.tema.nome : ''}
                </p>
                <p className='data'>
                    {evento.data ? new Date(evento.data).toLocaleDateString('pt-BR') : ''}
                </p>
                <h4 className='titulo'>
                    {evento.titulo || ''}
                </h4>
            </div>
        </div>
    )
}