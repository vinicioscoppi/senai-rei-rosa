import React from 'react';

import { Container } from './styles';
import AddCircle from '@material-ui/icons/AddCircle';

export default class Button extends React.Component {

    render() {
        return (
            <Container onClick={() => this.props.click(this.props.id + 1)}
                onMouseEnter={() => this.props.mouseEnter(this.props.id)}
                onMouseLeave={() => this.props.mouseLeave(this.props.id)}
                style={this.props.hovered ? this.getHoveredStyle() : this.getNotHoveredStyle()}>
                <AddCircle style={{ fontSize: 50 }}></AddCircle>
            </Container>
        );
    }

    getHoveredStyle = () => {
        return {
            border: 'solid 2px #ecf1f8',
            background: '#c3ccff radial-gradient(circle, transparent 1%, #c3ccff 1%) center/15000%',
            transition: 'background 0.8s',
            cursor: 'pointer'
        }
    }

    getNotHoveredStyle = () => {
        return {
            border: 'solid 4px #e2e6ed',
            background: '#ecf1f8',
            transition: 'background 0.3s'
        };
    }
}
