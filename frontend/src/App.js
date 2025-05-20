import { useState } from 'react';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const calculate = async (op) => {
    const response = await fetch(`http://localhost:5000/calc/${op}?a=${a}&b=${b}`);
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <h1>Miniräknare</h1>
      <input value={a} onChange={e => setA(e.target.value)} />
      <input value={b} onChange={e => setB(e.target.value)} />
      <div>
        <button onClick={() => calculate('add')}>+</button>
        <button onClick={() => calculate('sub')}>-</button>
        <button onClick={() => calculate('mul')}>×</button>
        <button onClick={() => calculate('div')}>÷</button>
      </div>
      <h2>Resultat: {result}</h2>
    </div>
  );
}

export default App;