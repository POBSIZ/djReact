import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import './css/style.css';

// PROPS 공부
class Info extends Component {
    render(){
        return(
            <div className="info">
                <h1>Hello {this.props.name}</h1>
                <p>
                    {this.props.children} <br/>
                    {this.props.number}
                </p>
            </div>
        );
    }
}

// props type 검증
Info.propTypes = {
    name: PropTypes.string, // string 타입
    children: PropTypes.string,
    number: PropTypes.number.isRequired, // number 타입, 필수 값으로 지정
};

Info.defaultProps={
    number:"01065459785"
}


// STATE 공부
class StateTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
        this.addNum = this.addNum.bind(this);
    };

    addNum(){
        this.setState({
            value: this.state.value + 1,
        });
    }

    render() {
        return (
            <div className="info">
                <h1>{this.state.value}</h1>
                <button onClick={this.addNum}>ClickMe</button>
            </div>
        );
    }
}

class Return extends Component {
    render(){
        return(
            <Info fo name="Won">Nice To Meet Ya</Info>
            // <StateTest></StateTest>
        );
    }
}

export default hot(module)(Return);