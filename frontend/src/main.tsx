import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SmallestNumb from './SmallestNumb.tsx'
import FaroShuffle from './FaroShuffle.tsx'
import bhslogo from './assets/bhslogo.png';

document.title = "Scharl Christian | BHS Praktikum";
// @ts-ignore
document.querySelector("link[rel~='icon']").href = bhslogo;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className="header normal">
            <img className="bhslogo" src={bhslogo} alt="Logo" />
            <div className="header-text normal">
                <p>Scharl Christian</p>
                <p>Mein Praktikum bei BHS Corrugated</p>
                <p>Vom 21.07. bis 25.07.2025</p>
            </div>
        </div>
        <div className="components-row normal">
            <SmallestNumb />
            <FaroShuffle />
        </div>
    </StrictMode>,
)
