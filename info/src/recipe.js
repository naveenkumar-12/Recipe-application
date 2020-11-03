import React from 'react'
import {Component} from 'react';
import $ from 'jquery';
import Cookies from "js-cookie";
import { Link} from 'react-router-dom';
import axios from 'axios';

class Recipe extends Component{
    constructor(props){
        super(props);
        this.state={}
        this.details=[]
        this.details=Cookies.get("detail")
        this.detail1=Cookies.get("detail1")
    }
    onlinesearch = (x)=>{
        const urlstring ="https://api.edamam.com/search?q="+x+"&app_id=b04ee223&app_key=5f4d7881e9257aa68939ba044747fbcf"
        
        $.ajax({
            url:urlstring,
            success: (search)=>{
                var list=[]
                search.hits.forEach((data)=>{
                    list.push(<div className="recipe"><h3>{data.recipe.label}</h3>
                    <ul className="main" >
                        <li className="img1"><img width="250rem" height="250rem" src={data.recipe.image} alt="img"/></li>
                        <li className="main1">
                        <ul className="mainin">
                            <li><h5>Totalweight : {Math.round(data.recipe.totalWeight)}g</h5><br/></li>
                            <li><h5>Cholesterol : {Math.round(data.recipe.totalNutrients.CHOLE.quantity)}mg</h5></li>
                            <li><h5>Energy      : {Math.round(data.recipe.totalNutrients.ENERC_KCAL.quantity)}kcal</h5></li>
                            <li><h5>Fat         : {Math.round(data.recipe.totalNutrients.FAT.quantity)}g</h5></li>
                            <li><h5>Carbs       : {Math.round(data.recipe.totalNutrients.CHOCDF.quantity)}mg</h5></li>
                            <li><h5>Fiber       : {Math.round(data.recipe.totalNutrients.FIBTG.quantity)}g</h5></li>
                            <li><h5>Protein     : {Math.round(data.recipe.totalNutrients.PROCNT.quantity)}g</h5></li>
                            <li><h5>Iron        : {Math.round(data.recipe.totalNutrients.FE.quantity)}mg</h5></li>
                            <li><h5>Vitamin-A   : {Math.round(data.recipe.totalNutrients.VITA_RAE.quantity)}&#956;</h5></li>
                            <li><h5>Vitamin-C   : {Math.round(data.recipe.totalNutrients.VITC.quantity)}&#956;</h5></li>
                        </ul>
                        </li>
                        <li className="main2" >
                        <ul className="ingrediants" >
                            <li><h5>Ingredients:</h5><br/></li>
                            <li>
                                <ul className="ing"  >{data.recipe.ingredients.map(ing =>(
                                    <li>{ing.text}</li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </div>)
                })
                this.setState({rows:list})
            },
            error:(xhr,status,err)=>{
                console.log("Failed to fetch")
            }
        })
            }
                
    change = () =>{
        const x=document.querySelector(".search").value;
        this.onlinesearch(x)
        const w={
            mail:this.detail1,
            search:x
        }
        console.log(w)
        const t= axios.post("/searchdata",w)
    }
    logout1 = ()=>{
        Cookies.remove('detail')
        Cookies.remove('detail1')
    }
    render(){
    return(
        <div>
            <div className="logout">
                <h4 className="h4">Welcome {this.details}</h4>
                <Link to="/" className="logout-link"><button onClick={this.logout1} >Log out.</button></Link>
            </div>
            <div className="search-button"><input type="text"  className="search"/>
                <button type="button1" onClick={this.change.bind(this)} className="btn btn-info">
                <span className="glyphicon glyphicon-search"></span> Search
                </button>
            </div>
            {this.state.rows}
        </div>
    );
    }
}

export default Recipe;