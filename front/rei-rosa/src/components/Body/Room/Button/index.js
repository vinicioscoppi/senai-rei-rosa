import React from 'react';

import { Container } from './styles';
import AddCircle from '@material-ui/icons/AddCircle';

export default class Button extends React.Component {

    render() {
        return (
            <Container onClick={() => this.props.onClick(this.props.id)}
                onMouseEnter={() => this.props.mouseEnter(this.props.id)}
                onMouseLeave={() => this.props.mouseLeave(this.props.id)}
                style={this.getStyle()}>
                {this.getIcon()}
            </Container>
        );
    }

    getStyle = () => {
        if (this.props.highlight)
            if (this.props.clicked)
                if (this.props.sync)
                    return this.getSyncedStyle();
                else
                    return this.getClickedStyle();
            else
                return this.getHoveredStyle();
        else
            return this.getNotHighlightedStyle();
    }

    getHoveredStyle = () => {
        return {
            border: 'solid 2px #ecf1f8',
            background: '#c3ccff radial-gradient(circle, transparent 1%, #c3ccff 1%) center/15000%',
            transition: 'background 0.8s',
            cursor: 'pointer'
        }
    }

    getNotHighlightedStyle = () => {
        return {
            border: 'solid 4px #e2e6ed',
            background: '#ecf1f8',
            transition: 'background 0.3s'
        };
    }

    getClickedStyle = () => {
        return {
            border: 'solid 4px #c3ccff',
            background: '#ecf1f8',
            transition: 'background 0.3s',
            color: '#c3ccff',
            fontSize: '50px'
        };
    }

    getSyncedStyle = () => {
        return {
            border: 'solid 4px #69f0ae',
            background: '#b9f6ca',
            transition: 'background 0.3s',
            color: '#69f0ae',
            fontSize: '50px'
        };
    }

    getIcon = () => {
        return this.props.clicked ? this.props.id + 1 : <AddCircle style={{ fontSize: 50 }}></AddCircle>;
    }
}
