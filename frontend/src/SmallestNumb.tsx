import { useState } from 'react';
import * as React from "react";

function SmallestNumb() {
    const [inputNumber, setInputNumb] = useState('');
    const [smallestNumber, setSmallestNumb] = useState('');
    const [fromIndex, setFromIndex] = useState('');
    const [toIndex, setToIndex] = useState('');
    const [error, setError] = useState(null);
    const [visible, setVisible] = useState(false);

    const handleSubmit = async () => {
        const response = await fetch(`smallestnumb/${inputNumber}`)
            .then(result => {
                if (!result.ok) {
                    throw new Error('Netzwerkantwort war nicht ok');
                } else setError(null);
                return result.json();
            })
            .catch(error => { 
                setError(error.message);
            });
        if (error != null) {
            return;
        }
        setInputNumb(response.inputNumber);
        setSmallestNumb(response.smallestNumber);
        setFromIndex(response.fromIndex);
        setToIndex(response.toIndex);
        setVisible(true);
    };

    function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
        setInputNumb(e.target.value);
        setError(null);
        setVisible(false);
    }

    return (
        <div>
            <h1>Aufgabe: <a href={"https://www.codewars.com/kata/573992c724fc289553000e95"}>Find the smallest</a></h1>

            <input type="number" placeholder="Zahl eingeben" value={inputNumber} onChange={e => handleChange(e)}/>
            <button onClick={handleSubmit}> Absenden </button>

            <p className="error">{error}</p>

            {visible && (
                <div>
                    <h2>Ergebnis</h2>
                    <p><strong>Eingegebene Zahl:</strong> {inputNumber}</p>
                    <p><strong>Kleinste Zahl:</strong> {smallestNumber}</p>
                    <p><strong>Von Index:</strong> {fromIndex}</p>
                    <p><strong>Zum Index:</strong> {toIndex}</p>
                </div>
            )}
        </div>
    );
}

export default SmallestNumb;
