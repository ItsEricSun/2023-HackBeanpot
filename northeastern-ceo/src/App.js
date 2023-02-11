import money from './money.png';
import './App.css';
import CEO from './components/CEO'
import NEU from './components/NEU'
import President from './components/President'
import React, { useState } from 'react'

function App() {
    const [name, setName] = useState("")
    return (
        <div className='parent'>
            <div className='component-relations'>   
                <NEU setName={setName} />
                <President name={name} />
                
                <CEO />
            </div>

            <div className='moneyImage'>
                <img src={money} className="App-logo" alt="logo" />
            </div>
        </div>
    );
}

export default App;
