import React from 'react';

import Sync from './Sync';
import Room from './Room';
import Start from './Start';

export default class Body extends React.Component {

    state = { sync: false }

    render() {
        return (
            <>
                <Sync sync={this.state.sync}></Sync>
                <Room onSynchronize={this.handleSynchronization}></Room>
                <Start sync={this.state.sync}></Start>
            </>
        );
    }

    handleSynchronization = () => {
        const state = this.state;
        state.sync = true;
        this.setState(state);
    }
}