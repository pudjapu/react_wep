import React from 'react'
import '../css/Cramer.css'
import Matrix from './Source/Matrix'
import {Gauss_jodan} from './Source/Gauss_jodan'

import { Input } from 'antd'
//import { Button } from 'antd'

class Gauss_Elimination extends React.Component{

    state = {
        rows: 2,
        columns: 2,
        Matrix: [[],[]],
        X: [],
    }

    Input = (e) =>{
        let arr = [];
        let Matrix = this.state.Matrix;
        arr = e.target.name.split(',');
        Matrix[parseInt(arr[0])][parseInt(arr[1])] = e.target.value;
        this.setState({Matrix: Matrix})
    }
    
    AddMatrix = (e) =>{
        this.setState({rows: this.state.rows+1})
        let Matrix = this.state.Matrix;
        Matrix.push([]);
        this.setState({Matrix: Matrix})
    }

    DelMatrix = (e) =>{
        if(this.state.rows > 2){
            let i;
            this.setState({rows: this.state.rows-1})
            let Matrix = this.state.Matrix;
            Matrix.pop();
            for(i = 0;i < Matrix.length;i++){
                Matrix[i].pop();
            }
            this.setState({Matrix: Matrix})
        }
        
    }

    Calculate = (e) =>{
        let answer = Gauss_jodan(this.state.Matrix)
        let data = [];
        for(let i =0;i < answer.length;i++){
            data.push(<div key={i}>X{i+1} : {answer[i]}</div>)
        }
        this.setState({X: data})
    }

    render(){
        return(
            <div className='allincompro'>
                <button onClick={this.AddMatrix}>+</button>
                <button onClick={this.DelMatrix}>-</button>
                <button onClick={this.Calculate}>cal</button>
                <Matrix row={this.state.rows} onChange={this.Input} value={this.state.Matrix}/>
                <div>{this.state.X}</div>

            </div>
            
        )
    }
}

export default Gauss_Elimination