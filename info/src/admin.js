import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

class Admin extends Component{
    constructor(){
        super();
        this.state={par:[],admindetails:""}
        }
    async componentDidMount() {
        const result1=await axios.post("/admin")
        console.log(result1.data)
        // result1.data.forEach ((data) => {
        // temp.push(<ul className="table"><li>{data.name}</li><li className="email">{data.email}</li><hr/></ul>)
        // });
        this.setState({par:result1.data})
        this.setState({admindetails:Cookies.get('details')})
        console.log(this.state.par)
    }
    logout =()=>{
        Cookies.remove('details')
    }

    render(){
        return(
        <div>
            <div className="adminheader">
                <h4>Welcome Admin :{this.state.admindetails}</h4>
                <Link to="/"><button className="adminbutton" onClick={this.logout}>Logout</button></Link>
            </div>
            <div className="admindata">
                <table>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            E-mail
                        </th>
                        <th>
                            Searched-items
                        </th>
                    </tr>
                    {this.state.par.map((e)=>{
                        const t=e.search.slice(1);
                            return(
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{t}</td>
                            </tr>)
                    })}
                </table>  
            </div>
        </div>
        )
    }

}

export default Admin;