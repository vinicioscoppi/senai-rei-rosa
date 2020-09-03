import React from 'react';

import Sync from './Sync';
import Room from './Room';
import Start from './Start';

export default class Body extends React.Component {

    render() {
        return (
            <>
                <Sync sync={false}></Sync>
                <Room></Room>
                <Start></Start>
            </>
        );
    }
}