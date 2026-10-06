import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("");
  const [itens, setItens] = useState([]);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  const adicionarItem = () => {
    if (texto.trim() === "") return;

    setItens([...itens, texto]);
    setTexto("");
  };

  return (
    <>
      <h2>Contador: {contador}</h2>

      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>

      <h1>Lista de Itens para compra</h1>

      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
      />

      <button onClick={adicionarItem}>Enviar</button>

      <ul>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

        <button onClick={() => setItens([])}>Limpar Lista</button>

        <ul>
          {itens.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>


    </>
  );
}

export default App;