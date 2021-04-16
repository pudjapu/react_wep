import React from 'react'
import {Matrix} from './Source/Matrix'
import Lu_de from './Source/lu_decompo'

class Lu_decomposition extends React.Component{

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
        let temp = this.state.Matrix;

        // copy array
        let Matrix = [];
        for (let i = 0; i < temp.length; i++)
            Matrix[i] = temp[i].slice();

        let a =[];
        let b = [];

        for(let i=0;i< Matrix.length;i++){
            b.push(Matrix[i][Matrix.length])
            b[i] = parseFloat(b[i])
            a.push(Matrix[i])
            a[i].pop()
            for(let j = 0;j < Matrix.length;j++){
                a[i][j] = parseFloat(a[i][j])
            }
        }
        let answer = Lu_de(a,b,true)
        let data = [];
        for(let i =0;i < answer.x.length;i++){
            data.push(<div key={i}>X{i+1} : {answer.x[i]}</div>)
        }
        this.setState({X: data})


    }

    render(){
        return(
            <div className='allincompro'>
                <h2>Lu decomposition</h2>
                <button onClick={this.AddMatrix}>+</button>
                <button onClick={this.DelMatrix}>-</button>
                <button onClick={this.Calculate}>cal</button>
                <Matrix row={this.state.rows} onChange={this.Input} value={this.state.Matrix}/>
                <div>{this.state.X}</div>
            </div>
        )
    }
}

export default Lu_decomposition