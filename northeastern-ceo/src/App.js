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
    );
}

export default App;
