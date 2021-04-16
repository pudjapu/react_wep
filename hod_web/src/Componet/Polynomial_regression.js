import React from 'react'

import '../css/polynomail_reger.css'

import { Input } from 'antd'

import {Matrix2Input} from './Source/Matrix'
import regression from 'regression';
var math = require('mathjs');

class Polynomial extends React.Component{

    
    state = {
        rows: 2,
        Matrix: [[],[]],
        X: 0,
        Answer: '',
        
    }

    AddMatrix = (e) =>{
        this.setState({rows: this.state.rows+1})
        let Matrix = this.state.Matrix;
        Matrix.push([]);
        this.setState({Matrix: Matrix})
    }

    DelMatrix = (e) =>{
        if(this.state.rows > 2){
            this.setState({rows: this.state.rows-1})
            let Matrix = this.state.Matrix;
            Matrix.pop();
            this.setState({Matrix: Matrix})
        }
    }

    MakeMatrix = (e) => {
        let rows = this.state.rows;
        rows = parseInt(rows);

        let wow = [];
        let i,j
        for(i= 0;i < rows;i++){
            for(j = 0; j < 2;j++){
                wow.push(<span className="MyInput"><Input name={i.toString()+','+j.toString()} onChange={this.Getvalue} className="Input_2" style={{margin: '5px'}} value={this.state.Matrix[i][j]}/></span>)
            }
            wow.push(<div></div>)
        }
        return(wow);
    }

    Input = (e) =>{
        let arr = [];
        let Matrix = this.state.Matrix;
        arr = e.target.name.split(',');
        Matrix[parseInt(arr[0])][parseInt(arr[1])] = e.target.value;
        this.setState({Matrix: Matrix})
    }

    GetX = (e) =>{
        let X = this.state.X;
        X = e.target.value;
        this.setState({X: X})
    }

    Calculate = (e) =>{
        let Matrix = this.state.Matrix;
        let data = [];
        for(let i =0;i < Matrix.length;i++){
            data.push([parseFloat(Matrix[i][0]),parseFloat(Matrix[i][1])])
        }
        let result = regression.linear(data);
        let a2 = result.equation[0];
        let a1 = result.equation[1];
        let a0 = result.equation[2];
        this.setState({Answer: a0+(a1*parseFloat(this.state.X))+(math.pow(a2,2)*parseFloat(this.state.X))})
    }

    render(){
        return(
            <div className='allincompro'>
                <h2>Polynomial regression</h2>
                <button onClick={this.AddMatrix}>+</button>
                <button onClick={this.DelMatrix}>-</button>
                <button onClick={this.Calculate}>cal</button>
                <span className="Text_Input_2"> X value : </span>
                <span><Input placeholder="0.000001" onChange={this.GetX} className="Input_2"/></span>
                <Matrix2Input row={this.state.rows} onChange={this.Input} value={this.state.Matrix}/>
                <div>{this.state.Answer}</div>
            </div>
        )
    }
}

export default Polynomial;