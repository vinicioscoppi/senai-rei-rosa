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
                    clicked={this.state.anyRoomClicked}
                    onSynchronize={this.handleSynchronization}>
                </Room>
                <Start sync={this.state.sync}
                    handleSynchronization={this.handleSynchronization}
                    confirm={this.confirmSynchronization}>
                </Start>
            </>
        );
    }

    handleSynchronization = async () => {
        const state = this.state;
        if (!state.anyRoomClicked) {
            window.alert('Por favor informe a quantidade de salas antes de sincronizar.');
        } else {
            state.sync = window.confirm('Tem certeza que quer sincronizar? Não será mais possível adicionar novas salas.');
            if (state.sync) {
                await fetch('http://localhost:3001/sync', { method: 'POST' });
                this.setState(state);
            }
        }
    }

    handleRoomClick = () => {
        this.setState({ sync: this.state.sync, anyRoomClicked: true });
    }
}