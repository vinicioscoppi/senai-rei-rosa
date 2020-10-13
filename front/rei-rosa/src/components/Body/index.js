import React from 'react';

import Sync from './Sync';
import Room from './Room';
import Start from './Start';

export default class Body extends React.Component {

    state = { sync: false, anyRoomClicked: false }

    render() {
        return (
            <>
                <Sync sync={this.state.sync}></Sync>
                <Room superHandleClick={this.handleRoomClick}
                    sync={this.state.sync}
                    clicked={this.state.anyRoomClicked}>
                </Room>
                <Start sync={this.state.sync}
                    handleSynchronization={this.handleSynchronization}>
                </Start>
            </>
        );
    }

    handleSynchronization = () => {
        this.setState({ sync: true, anyRoomClicked: true });
    }

    handleRoomClick = () => {
        this.setState({ sync: this.state.sync, anyRoomClicked: true });
    }
}