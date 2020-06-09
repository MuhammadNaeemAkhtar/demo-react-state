import React, { useState } from 'react';
import './Room.css';

function Room() {
    let [isLit, setLit] = useState(true);
    let [temperature, setTemperature] = useState(72);

    return(
        <div className={`room ${isLit ? "lit" : "dark"}`}>
            This room is { isLit ? "lit" : "dark"}
            <br />
            <br />
            Temperature: {temperature}
            <br />
            <br />
            <button onClick={() => setTemperature(++temperature)}>+</button>
            <button onClick={() => setTemperature(--temperature)}>-</button>
            <br />
            <br />
            <button onClick={() => setLit(true)}>ON</button>
            <button onClick={() => setLit(false)}>OFF</button>
            <br />
        </div>
    );
}

export default Room;