import React from 'react';

import Sync from './Sync';
import Room from './Room';
import Start from './Start';

export default class Body extends React.Component {

    state = { sync: false, anyRoomClicked: false, start: false }

    render() {
        return (
            <>
                <Sync sync={this.state.sync}></Sync>
                <Room superHandleClick={this.handleRoomClick}
                    sync={this.state.sync}
                    clicked={this.state.anyRoomClicked}
                >
                </Room>
                <Start sync={this.state.sync}
                    handleSynchronization={this.handleSynchronization}
                    started={this.state.start}
                >
                </Start>
            </>
        );
    }

    handleSynchronization = () => {
        if (this.state.start)
            return;

        const start = window.confirm(this.state.sync ?
            'Gostaria de iniciar o jogo? Salas com menos de 2 jogadores serão automaticamente excluídas.' :
            'Gostaria de Sincronizar? Os jogadores poderão ver as salas e não será possível adicionar novas.');
        const state = this.state;
        state.start = this.state.sync === true && start === true;
        state.sync = true;
        this.setState(state);
    }

    handleRoomClick = () => {
        const state = this.state;
        state.anyRoomClicked = true;
        this.setState(state);
    }
}