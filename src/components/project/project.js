import React, { Component } from "react";
import HoverProject from './hoverProject';
import LargeProject from './largeProject';
import { style, cssRaw } from 'typestyle';


var projectItem = style({
        border: "1px solid #ffc34c",
        height: "auto",
        overflow: "hidden",
        position: "relative",
});

var projectHover = style({
        color: "white",
        position: "absolute",
        padding: "4px",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#3c444b",
        transition: "all 500ms",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
});


class Project extends Component {
    constructor(){
        super();
        this.state = {
            opacity: 0,
            showModal: false
        }
    }
    toggleModalShow (arg){
        let opacity;
        if(arg === false){
            opacity = 0;
        }
        this.setState({ opacity: opacity, showModal: arg});
    }
    render(){
        return(
            <div className={projectItem} 
                onMouseOver={(e)=>{this.setState({opacity: 1});}}
                onMouseLeave={()=>{this.setState({opacity: 0});}}
            >
                <img src={this.props.featured_image} alt={this.props.title}/>
                <LargeProject show={this.state.showModal} toggleModalShow ={this.toggleModalShow.bind(this, false)} {...this.props} />
            </div>
        );
    }
}


export default Project;