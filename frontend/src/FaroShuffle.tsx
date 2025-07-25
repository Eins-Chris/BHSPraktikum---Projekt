import { useState } from 'react';
import * as React from "react";

function SmallestNumb() {
    const [inputNumber, setInputNumb] = useState('');
    const [shuffleQuantity, setSmallestNumb] = useState('');
    const [error, setError] = useState(null);
    const [visible, setVisible] = useState(false);

    const handleSubmit = async () => {
        const response = await fetch(`faroshuffle/${inputNumber}`)
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
        setInputNumb(response[0]);
        setSmallestNumb(response[1]);
        setVisible(true);
    };

    function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
        setInputNumb(e.target.value);
        setError(null);
        setVisible(false);
    }

    return (
        <div>
            <h1>Aufgabe: <a href={"https://www.codewars.com/kata/57bc802c615f0ba1e3000029"}>Faro Shuffle Count</a></h1>

            <input type="number" placeholder="Zahl eingeben" value={inputNumber} onChange={e => handleChange(e)}/>
            <button onClick={handleSubmit}> Absenden </button>

            <p className="error">{error}</p>

            {visible && (
                <div>
                    <h2>Ergebnis</h2>
                    <p><strong>Größe des Kartendecks:</strong> {inputNumber}</p>
                    <p><strong>Benötigte Shuffle's:</strong> {shuffleQuantity}</p>
                </div>
            )}
        </div>
    );
}

export default SmallestNumb;
