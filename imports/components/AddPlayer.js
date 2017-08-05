import React from 'react';
import { Players } from '../api/players';

export class AddPlayer extends React.Component
{
    render()
    {
        return (
            <div className="item">
                {this.props.children}
                <form className="form" onSubmit={this.handleSubmit}>
                    <input className="form__input" type="text" name="playerName" placeholder="Player name" />
                    <input className="form__input" type="number" name="playerScore" default="0" min="-100" max="100" />
                    <button className="button">Add player</button>
                </form>
            </div>
        );

    }

    handleSubmit(e) {
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
}


