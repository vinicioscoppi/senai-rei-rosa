import React from 'react';

import { Container } from './styles';
import AddCircle from '@material-ui/icons/AddCircle';
// import Square from '@material-ui/icons/CropSquareOutlined';
// import Circle from '@material-ui/icons/RadioButtonUncheckedOutlined';

export default class Button extends React.Component {

    render() {
        return (
            <Container onClick={() => this.props.click(this.props.id)}
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
                return this.getClickedStyle();
            else
                return this.getHoveredStyle();
        else
            return this.getNotHoveredStyle();
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

    getClickedStyle = () => {
        return {
            border: 'solid 4px #c3ccff',
            background: '#ecf1f8',
            transition: 'background 0.3s',
            color: '#c3ccff',
            fontSize: '50px'
        }
    }

    getIcon = () => {
        return this.props.clicked ? this.props.id + 1 : <AddCircle style={{ fontSize: 50 }}></AddCircle>;
    }

    // getIcon = () => {
    //     switch (this.props.icon) {
    //         case 'CIRCLE':
    //             return  <Circle style={{ fontSize: 70, color: this.getIconColor() }}></Circle>;
    //         case 'SQUARE':
    //             return <Square style={{ fontSize: 70, color: this.getIconColor() }}></Square>;
    //         default:
    //             return <AddCircle style={{ fontSize: 50 }}></AddCircle>;
    //     }
    // }

    // getIconColor() {
    //     switch (this.props.color) {
    //         case 'BLUE':
    //             return '#536dfe';
    //         case 'RED':
    //             return '#ff4081';
    //         case 'YELLOW':
    //             return '#ffd740';
    //         case 'PINK':
    //             return '#ea80fc';
    //         case 'GREEN':
    //             return '#b2ff59';
    //         default:
    //             return '#ecf1f8';
    //     }
    // }
}
