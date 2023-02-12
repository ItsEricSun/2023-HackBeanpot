import React, { useState } from 'react'

function NEU({ setName }) {
    const [nameInput, setNameInput] = useState("");
    return <div>
        <div className="presidentsTitle">
            <h1 className="title-header">What Will You Be Called?</h1>
            <div className="buttons-panel">
                <input className="inputs" value={nameInput} onChange={(e) => {
                    setNameInput(e.target.value)
                }} />
                <button
                    className="button"
                    onClick={() => setName(nameInput)}
                >
                    Set Your CEO's Name
                </button>
            </div>
        </div>
    </div>
}


export default NEU