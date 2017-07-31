import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from '../imports/api/players';
import { TitleBar } from '../imports/components/TitleBar';
import { AddPlayer } from '../imports/components/AddPlayer';
import { PlayerList } from '../imports/components/PlayerList';

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find().fetch()
        let jsx = (
            <div>
                <TitleBar title="Score keeper" />
                <PlayerList players={players} />
                <AddPlayer />
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('container'));
    });
});

