import React from 'react'
import {Matrix} from './Source/Matrix'
import { Jacobi } from './Source/Jacobi_iteration'
import { Input } from 'antd';
import { Button } from 'antd'
import '../css/Gauss_seidel.css'

class Gauss_seidel extends React.Component{

    state = {
        rows: 2,
        Matrix: [[],[]],
        X: [],
        ERROR: ''
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

    getERR= (e) => {
        this.setState({
            ERROR: e.target.value,
        });
    };

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
        let x = [];
        let error_ = [];

        for(let i=0;i< Matrix.length;i++){
            b.push(Matrix[i][Matrix.length])
            b[i] = parseFloat(b[i])
            a.push(Matrix[i])
            a[i].pop()
            for(let j = 0;j < Matrix.length;j++){
                a[i][j] = parseFloat(a[i][j])
            }
            x.push(1);
            error_.push(9999);
        }

        let answer = Jacobi(a,b,x,error_,parseFloat(this.state.ERROR))

        this.setState({X: answer})


    }
    render(){
        return(
            <div className='allincompro'>
                <h2>Gauss seidel interation</h2>
                <Button className='Button_' type="primary" onClick={this.AddMatrix}>Add row/column</Button>
                <Button className='Button_' type="primary" onClick={this.DelMatrix}>Delete row/column</Button>
                <Button className='Button_' type="primary" onClick={this.Calculate}>Calculate</Button>
                <div>
                    <span className="Text_Input_2"> ERROR : </span>
                    <span><Input placeholder="0.000001" onChange={this.getERR} className="Input_2"/></span>
                </div>
                <Matrix row={this.state.rows} onChange={this.Input} value={this.state.Matrix}/>
                <div>{this.state.X}</div>
            </div>
        )
    }
}

export default Gauss_seidel;