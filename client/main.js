import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from '../imports/api/players';


const renderPlayers = (playersList)  => {
    return playersList.map((player) => {
        return (<p key={player._id}>
                    {player.name} has {player.score} points(s)
                    <button onClick={() => Players.update({_id: player._id }, {$inc: {score: 1}})}>+1</button>
                    <button onClick={() => Players.update({_id: player._id }, {$inc: {score: -1}})}>-1</button>
                    <button onClick={() => Players.remove({_id: player._id})}>X</button>
                </p>);
    });
}

const handleSubmit = (e) => {
    let playerName = e.target.playerName.value;
    let playerScore = e.target.playerScore.value;
    e.preventDefault();

    if (!!playerName && !!playerScore) {
        Players.insert({
            name: playerName,
            score: parseInt(playerScore)
        });
        e.target.playerName.value = ''
        e.target.playerScore.value = ''
    }
}

class TitleBar extends React.Component
{

}

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find().fetch()
        let jsx =
            <div>
                {renderPlayers(players)}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player name" />
                    <input type="number" name="playerScore" default="0" min="-100" max="100" />
                    <button>Add player</button>
                </form>
            </div>
        ReactDOM.render(jsx, document.getElementById('container'));
    });
});

