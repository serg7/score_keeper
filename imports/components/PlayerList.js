import React from 'react';
import { Player } from './Player';
import PropTypes from 'prop-types';

export class PlayerList extends React.Component
{
    renderPlayers()
    {
        if (this.props.players.length === 0)
        {
            return (
                <div className="item">
                    <p className="item__message item__message-empty">Add new player</p>
                </div>
            );
        }
        else
        {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player} />;
            });
        }
    }

    render()
    {
        return (
            <div>
                {this.renderPlayers()}
            </div>
        )
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}
