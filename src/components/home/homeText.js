import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';

export default class HomeText extends Component{
    render(){
        return(
            <div id="headerText" className={`pageSection col-xs-12 ${this.props.className}`} >

            </div>
        );
    }
}
