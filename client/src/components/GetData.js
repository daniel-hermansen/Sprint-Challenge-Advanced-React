import React from "react";
import PlayerCard from "./PlayerCard";
import PlayerForm from "./PlayerForm";

class GetData extends React.Component {
    constructor(){
      super();
      this.state = {
        data: []
      };
    }

    addNewPlayer = (player, country) => {
        const newPlayer = {
            name: player,
            country: country,
            searches: Math.round(Math.random() * (100-1) +1),
            id: Date.now()
        };
        this.setState({
            data: [newPlayer, ...this.state.data]
        });
    };
  
    componentDidMount() {
      fetch("http://localhost:5000/api/players")
        .then(res => res.json())
        .then(player => this.setState({ data: player }))
        .catch(err => console.log("There has been an error fetching the data", err));
    };

    render() {
        return (
            <div>
                <PlayerForm addNewPlayer ={this.addNewPlayer} />
                <div className="player-container">
                    {this.state.data.map(player => {
                        return (<PlayerCard key = {player.id} player ={player} />);
                    })}
                </div>
            </div>
        );
    }
}
  
export default GetData;