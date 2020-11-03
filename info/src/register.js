import React from 'react';
import {Link} from 'react-router-dom';
import {Component} from 'react';
import axios from 'axios';

class Register extends Component{
    constructor(props){
        super(props);
            this.state={name:"",email:"",password:"",confirmpassword:"",check:""}

    }
    handleChangen=(event)=>{
        this.setState({name: event.target.value});}
    handleChangee=(event)=>{
        this.setState({email: event.target.value});}
    handleChangep=(event)=>{
        this.setState({password: event.target.value});}
    handleChangecp=(event)=>{
        this.setState({confirmpassword: event.target.value});}
    submitHandler=async(event)=>{
        event.preventDefault();
        const data={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            confirmpassword:this.state.confirmpassword,
        }
        if(data.password===data.confirmpassword){
            const result= await axios.post('/register',data)
            if(result.data==="dup"){
                this.setState({check:"Email Id is already taken"})
            }
            else{
                this.props.history.push("/login")
            }
        }
        else{
            this.setState({check:"password and confirm password not matching"})
        }
    }
    render(){
    return(<div className="register1" >
        <form  className="reg1" onSubmit={this.submitHandler}>
            <div className="span">{this.state.check}</div>
            <div className="regname">Register</div>
            Name<input type="text" className="fname" name="name" value={this.name} onChange={this.handleChangen} required/>
            <br/>
            E-mail<input type="email" className="fname" name="email"value={this.email} onChange={this.handleChangee} required/>
            <br/>
            Password<input type="password" className="fname" name="password"value={this.password} onChange={this.handleChangep} required/>
            <br/>
            Confirm Password<input type="password" className="fname" name="confirmpassword"value={this.confirmpassword} onChange={this.handleChangecp} required/>
            <br/>
            <Link to="/login" className="goreg-link"><button className="goreg">log in..</button></Link> 
             <button className="submit" type="submit">Create..</button> 

    </form> 
    </div>
        )
}
}

export default Register;