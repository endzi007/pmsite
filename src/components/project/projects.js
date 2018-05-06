import React, { Component } from "react";
import Project from './project';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/projectActions';
import FlipMove from 'react-flip-move';
import fetch from 'isomorphic-fetch';
import { style } from 'typestyle';


const mapStateToProps = (store) =>{
    return{
        categories: store.categories,
        filterTags: store.filterTags
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators(actions, dispatch)
}

const defaultStyle = style({
    color: "#514c43",
    minWidth:"300px",
    textAlign: "center"
});


class Projects extends Component {
    constructor(){
        super();
    }


    componentDidMount(){
        this.props.fetchCategories();
    }
    render(){
        var projectsToRender = this.props.categories.map((project, i)=>{
                return <Project key={"project"+i} className={`${defaultStyle} projectItem`} {...project} />

        });
        return(
            <div id="projectsSection"  className="pageSection">
                <h1>MY PORTFOLIO</h1>
                <div id="projectsSectionContent">
                    {projectsToRender}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);