import { useState } from 'react';
import './App.css';

function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [fromIndex, setFromIndex] = useState('');
    const [toIndex, setToIndex] = useState('');

    const handleSubmit = async () => {
        const response = await fetch(`smallestnumb/${input}`);
        const data = await response.json();
        setInput(data.inputNumber);
        setResult(data.smallestNumber);
        setFromIndex(data.fromIndex);
        setToIndex(data.toIndex);
    };

    return (
        <div>
            <h1>Aufgabe: <a href={"https://www.codewars.com/kata/573992c724fc289553000e95"}>Find the smallest</a></h1>

            <input type="number" placeholder="Zahl eingeben"/>
            <button onClick={handleSubmit}> Absenden </button>

            <p>{error}</p>

            <div>
                <h2>Ergebnis</h2>
                <p><strong>Eingegebene Zahl:</strong> {result.inputNumber}</p>
                <p><strong>Kleinste Zahl:</strong> {result.smallestNumber}</p>
                <p><strong>Von Index:</strong> {result.fromIndex}</p>
                <p><strong>Zum Index:</strong> {result.toIndex}</p>
            </div>
        </div>
    );
}

export default App;
