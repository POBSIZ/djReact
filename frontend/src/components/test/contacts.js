import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import './css/style.css';

class ContactInfo extends Component {
    render() {
        return (
            <div className="info">
                <h1>{this.props.cinfo.name}</h1>
                <p>{this.props.cinfo.num}</p>
            </div>
        );
    }
}

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            contactData: [
                {name: 'Won', num: '0109'},
                {name: 'Gang', num: '1013'},
                {name: 'Hee', num: '2017'},
                {name: 'Jeon', num: '3011'},
            ]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            keyword: e.target.value
        });
    }

    render() {
        const mapToComponent =(data)=>{
            data.sort();
            data = data.filter(
                (cinfo)=>{
                    return cinfo.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
                }
            );
            return data.map((cinfo, i)=>{
                return(<ContactInfo cinfo={cinfo} key={i}></ContactInfo>)
            });
        }

        return (
            <div className="tli">
                <h1>Contacts</h1>
                <input 
                    name="keyword" 
                    placeholder="Search"
                    value={this.state.keyword} 
                    onChange={this.handleChange}
                />
                {mapToComponent(this.state.contactData)}
            </div>
        );
    }
}

export default hot(module)(Contacts)