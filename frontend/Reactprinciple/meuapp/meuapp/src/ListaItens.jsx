import React, { useState } from 'react';
import './ListaItens.css';  

function ListaItens() {
    const [itens, setItens] = useState([]);
    const [novoItem, setNovoItem] = useState('');

    const adicionarItem = () => {
        if (novoItem.trim() !== '') {
            setItens([...itens, novoItem]);
            setNovoItem('');
        }
    };

    const removerItem = (index) => {
        const novaLista = itens.filter((_, i) => i !== index);
        setItens(novaLista);
    }

    return (
        <div>
            <h2>Lista de Itens</h2>
            <input
                type="text"
                value={novoItem}
                onChange={(e) => setNovoItem(e.target.value)}
            />
            <button onClick={adicionarItem}>Adicionar</button>
            <ul>
                {itens.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => removerItem(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaItens;