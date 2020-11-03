import React, { Component } from "react";
import axios from 'axios';
import { Link} from "react-router-dom";
import Cookies from "js-cookie";

class Login extends Component{
    constructor(){
        super();
            this.state={email:"",password:"",loged:""}

    }
    handleChangee=(event)=>{
        this.setState({email: event.target.value});}
    handleChangep=(event)=>{
        this.setState({password: event.target.value});}
    submitHandler=async(event)=>{
        event.preventDefault();
        const data={
            email:this.state.email,
            password:this.state.password,
        }
        const result= await axios.post('/login',data);
        if(result.data.email){
            if((result.data.email)===("naveenmuruganatham12@gmail.com")){
                Cookies.set('details',result.data.name)
                this.props.history.push("/admin")
                
            }
            else{
            Cookies.set('detail',result.data.name)
            Cookies.set('detail1',result.data.email)
            this.props.history.push("/recipe")
            }
        }
        else{
            this.setState({loged:result.data})
        }

        
    }
    render(){return(
        <div className="register1" >
        <form  className="reg1" onSubmit={this.submitHandler}>
        <span className="ss">{this.state.loged}</span>
        <div className="regname1">Log In</div>
            E-mail<input type="email" className="fname" name="email"value={this.email} onChange={this.handleChangee} required/>
            <br/>
            Password<input type="password" className="fname" name="password"value={this.password} onChange={this.handleChangep} required/>
            <br/>
            <Link className="goreg-link"to="/register"><button className="goreg">Register</button></Link>
            <input className="submit"type="submit" value="Done.."/>

    </form> 
    </div>
    )
    }
}

export default Login;