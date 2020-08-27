import React from 'react';

import { Container } from './styles';
import AddCircle from '@material-ui/icons/AddCircle';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StopIcon from '@material-ui/icons/Stop';

export default class Button extends React.Component {

    render() {
        return (
            <Container onClick={() => this.props.click(this.props.id + 1)}
                onMouseEnter={() => this.props.mouseOver(this.props.id)}
                onMouseLeave={() => this.props.mouseLeave(this.props.id)}
                style={this.props.hovered ? this.getHoveredStyle() : this.getNotHoveredStyle()}>
                {this.getIcon()}
            </Container>
        );
    }

    getIcon() {
        const icon = this.props.icon;
        if (icon === 'ADD') {
            return <AddCircle style={{ fontSize: 50 }}></AddCircle>
        } else if (icon === 'CIRCLE') {
            return <FiberManualRecordIcon style={{ fontSize: 100 }}></FiberManualRecordIcon>
        } else if (icon === 'SQUARE') {
            return <StopIcon style={{ fontSize: 100 }}></StopIcon>
        } else {
            return <AddCircle style={{ fontSize: 200 }}></AddCircle>
        }
    }

    getHoveredStyle() {
        return {
            border: 'solid 2px #ecf1f8',
            background: '#c3ccff radial-gradient(circle, transparent 1%, #c3ccff 1%) center/15000%',
            transition: 'background 0.8s',
            cursor: 'pointer'
        }
    }

    getNotHoveredStyle() {
        return {
            border: 'solid 4px #e2e6ed',
            background: '#ecf1f8',
            transition: 'background 0.3s'
        };
    }
}
