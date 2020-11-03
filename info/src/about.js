import React, { Component } from "react";
import {Link}from 'react-router-dom';
import Cookies from "js-cookie";
class About extends Component{
    constructor(){
        super();
        this.state={details:Cookies.get('detail'),admindetails:Cookies.get('details')}
    }
    fun1 =()=>{
        if(this.state.details){
            return("/recipe")
        }
        else{
            if(this.state.admindetails){
                return("/admin")
            }
            else{
                return("/login")
            }
        }
    }
    render(){
    return(<div className="para1">
                <p>Don't   Need  Silver  Fork  To  Eat  Good  Food! We Make It Good . .</p>
                
                <p1>
                    Provide all the food ingrdients list and all the nutrients available in the food also displayed.
                    It all will done by simply click an -Explore- button given below
                </p1>
                <hr className="hr"></hr>
                <Link className="link"  to={this.fun1()}>
                    <button className="bt">Explore..</button>
                </Link>
                
                <div className="social">
                    <div className="social1">Follow us.</div>
                    <a href="https://www.instagram.com/im__naveen_12/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram">Instagram</i>
                    </a>
                    <a href="https://github.com/naveenkumar-12" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github">Github</i>
                    </a>
                    <a href="https://twitter.com/Naveenk20770366" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter">Twitter</i>
                    </a>
                </div>
            </div>
        )
}
}

export default About;
