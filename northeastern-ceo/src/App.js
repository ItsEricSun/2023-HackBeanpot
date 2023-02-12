import money from './assets/money.png';
import neu from './assets/neu.svg';
import './App.css';
import CEO from './components/CEO'
import NEU from './components/NEU'
import President from './components/President'
import React, { useState } from 'react'

function App() {
    const [name, setName] = useState("")
    return (
        <html lang="en">
            <head>
                <link href="App.css" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@700&family=Lato:wght@400&display=swap" rel="stylesheet" /> 
            </head>
            <div className='parent'>
                <div className='presNames'>
                    <NEU setName={setName} />
                    <President name={name} />
                </div>
                <div className='component-relations'>
                    <div className='moneyImage'>
                        <img src={neu} className="NEU-logo" alt="logo" />
                    </div>
                    <div className='qwop'>
                        <CEO />
                    </div>
                </div>
            </div>
        </html>
    );
}

export default App;
