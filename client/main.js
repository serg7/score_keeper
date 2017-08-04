import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from '../imports/api/players.js';
import { App } from '../imports/components/App';

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find({}, {
            sort: {
                score: -1
            }
        }).fetch();

        ReactDOM.render(<App title="Score Keeper" players={players} />, document.getElementById('container'));
    });
});

