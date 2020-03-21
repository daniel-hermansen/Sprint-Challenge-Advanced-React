import React from 'react';
import { useInput } from "../hooks/customhook";

const PlayerForm = (props) => {
    const [playerName, handleNameChanges, clearPlayerInput] = useInput("");
    const [country, handleCountryChanges, clearCountryInput] = useInput("");

    const handleSubmit = e => {
        e.preventDefault();
        props.addNewPlayer(playerName, country);
        clearPlayerInput();
        clearCountryInput();
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>Player</label>
            <input 
                data-testid="player"
                name="player"
                placeholder="Player"
                value={playerName}
                onChange={handleNameChanges}
            />
            <label>Country</label>
            <input 
                data-testid="country"
                name="country"
                placeholder="Country"
                value={country}
                onChange={handleCountryChanges}
            />
            <button className="form-button">Add Player</button>
        </form>
    );
};

export default PlayerForm;