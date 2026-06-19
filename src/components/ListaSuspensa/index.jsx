import './lista-suspensa.estilos.css';

export function ListaSuspensa ({ itens = [] }) {
    return (
        <>
            <option value="" defaultValue="">
                Selecione uma opção
            </option>
            {itens.map(function (item) {
                return (
                    <option key={item.id} value={item.id}>
                        {item.nome}
                    </option>
                )
            })}
        </>
    )
}