import React, { Component } from "react";
import HoverProject from './hoverProject';
import LargeProject from './largeProject';
import { style, cssRaw } from 'typestyle';



const Project = (props)=> {
    var projectItem = style({
        border: "1px solid #ffc34c",
        height: "250px",
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${props.featured_image})`,
        backgroundSize: "cover",
        transition: "all .5s linear",
        $nest: {
            "&:hover": {
                backgroundImage: `url(${props.hover})`     
            }
        }
    });

    return(
        <div className={projectItem}>
            {props.title}
            <LargeProject show={false} {...props} />
        </div>
    );
 }



export default Project;