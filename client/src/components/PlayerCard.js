import React from 'react';

const PlayerCard = (props) => {
    return (
        <div className="player-card" data-testid="playercard">
            <h3>{props.player.name}</h3>
            <p>Country: <span>{props.player.country}</span></p>
            <p>Searches: <span>{props.player.searches}</span></p>
        </div>
    )
}

export default PlayerCard;