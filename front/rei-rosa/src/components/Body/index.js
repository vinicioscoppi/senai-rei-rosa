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
                <Start sync={this.state.sync} confirm={this.confirmSynchronization}></Start>
            </>
        );
    }

    handleSynchronization = () => {
        const state = this.state;
        state.sync = true;
        this.setState(state);
    }

    confirmSynchronization = () => {
        const state = this.state;
        state.sync = window.confirm('Tem certeza que quer sincronizar? Não será mais possível adicionar novas salas.');
        this.setState(state);
    }
}