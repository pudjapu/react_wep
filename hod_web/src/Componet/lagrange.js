import React from 'react'
import { Input } from 'antd'
import { Button } from 'antd'
import {Matrix2Input} from './Source/Matrix'
import Lagranges from './Source/lagranges'

import '../css/lagrange.css'

class Lagrange extends React.Component{

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
        let Matrix = this.state.Matrix
        let wow = new Lagranges(parseFloat(Matrix[0][0]), parseFloat(Matrix[0][1]), parseFloat(Matrix[1][0]), parseFloat(Matrix[1][1]));
        let index;
        for(let i = 2;i < Matrix.length;i++){
            index = wow.addPoint(parseFloat(Matrix[i][0]), parseFloat(Matrix[i][1]));
        }

        this.setState({Answer : wow.valueOf(parseFloat(this.state.X))})

    }

    render(){
        return(
            <div className='allincompro'>
                <h2>Lagrange interpolation</h2>
                <div>
                    <Button className='Button_' type="primary" onClick={this.AddMatrix}>Add Point</Button>
                    <Button className='Button_' type="primary" onClick={this.DelMatrix}>Delete Point</Button>
                    <Button className='Button_' type="primary" onClick={this.Calculate}>Calculate</Button>
                </div>
                <span className="Text_Input_2"> X value : </span>
                <span><Input placeholder="0.000001" onChange={this.GetX} className="Input_2"/></span>
                <Matrix2Input row={this.state.rows} onChange={this.Input} value={this.state.Matrix}/>
                <div>{this.state.Answer}</div>
            </div>
        )
    }
}

export default Lagrange;