import  { useState } from 'react';

const Armazenamento = () => {
  const [inputValue, setInputValue] = useState('');
  const [sessionValue, setSessionValue] = useState('');

  const handleSetItem = () => {
    sessionStorage.setItem('myKey', inputValue);
    setSessionValue(sessionStorage.getItem('myKey'));
  };

  const handleRemoveItem = () => {
    sessionStorage.removeItem('myKey');
    setSessionValue(sessionStorage.getItem('myKey'));
  };

  const handleClear = () => {
    sessionStorage.clear();
    setSessionValue(sessionStorage.getItem('myKey'));
  };

  return (
    <div>
      <h1>Vasos Inteligentes</h1>
      <p>Insira um produto:</p>
      <input
        type="text"
        placeholder="Insira o nome do produto"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSetItem}>Inserir Item</button>
      <button onClick={handleRemoveItem}>Remover Item</button>
      <button onClick={handleClear}>Limpar</button>

      {sessionValue && (
        <div>
          <h2>Lista de produtos armazenados</h2>
          <p>{sessionValue}</p>
        </div>
      )}
    </div>
  );
};

export default Armazenamento;
