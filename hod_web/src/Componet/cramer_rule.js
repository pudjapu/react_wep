import React, { forwardRef } from 'react'
import '../css/Cramer.css'
// import {AddMatrix,DelMatrix,MakeMatrix,Getvalue} from './Source/Matrix'

import { Input } from 'antd'
import { Button } from 'antd'

class Cramer extends React.Component{

    state = {
        rows: 2,
        columns: 2,
        Matrix: [[],[]],
        Answer: [],
    }

    AddMatrix = (e) =>{
        this.setState({rows: this.state.rows+1,columns: this.state.columns+1})
        let Matrix = this.state.Matrix;
        Matrix.push([]);
        this.setState({Matrix: Matrix})
    }

    DelMatrix = (e) =>{
        if(this.state.rows > 2){
            this.setState({rows: this.state.rows-1,columns: this.state.columns-1})
            let Matrix = this.state.Matrix;
            Matrix.pop();
            for(let i = 0;i < this.state.rows-1;i++){
                Matrix[i].pop()
            }
            this.setState({Matrix: Matrix})
        }
    }

    MakeMatrix = (e) => {
        let rows = this.state.rows;
        rows = parseInt(rows);
        let columns = this.state.columns;
        columns = parseInt(columns);

        let wow = [];
        let i,j
        for(i= 0;i < rows;i++){
            for(j = 0; j < columns;j++){
                wow.push(<span className="MyInput"><Input name={i.toString()+','+j.toString()} onChange={this.Getvalue} className="Input_2" style={{margin: '5px'}} value={this.state.Matrix[i][j]}/></span>)
            }
            wow.push(<div></div>)
        }
        // console.log(wow)
        return(wow);
    }

    MakeAnswer = (e) =>{
        let rows = this.state.rows;
        rows = parseInt(rows);

        let wow = [];
        let i;
        for(i = 0; i < rows;i++){
            wow.push(<Input name={i.toString()} onChange={this.GetAnswer} className="Input_2" style={{margin: '5px'}} value={this.state.Answer[i]}/>)
            wow.push(<div></div>)
        }
        return(wow);
    }

    Getvalue = (e) => {
        let arr = [];
        let Matrix = this.state.Matrix;
        arr = e.target.name.split(',');
        Matrix[parseInt(arr[0])][parseInt(arr[1])] = e.target.value;
        this.setState({Matrix: Matrix})
    }

    GetAnswer = (e) => {
        let Answer = this.state.Answer;
        Answer[parseInt(e.target.name)]= e.target.value;
        this.setState({Answer: Answer})
        this.setState({Answer: Answer})
    }

    Calculate = (e) =>{

    }

    render(){
        return(
            <div className='allincompro'>
                <h2>Cramer's Rule</h2>
                <div>
                    <button onClick={this.AddMatrix}>add row/column</button>
                    <button onClick={this.DelMatrix}>Del row/column</button>
                    <button onClick={this.Calculate}>Calculate</button>
                </div>
                <div className='MakeMatrix'>{this.MakeMatrix()}{this.MakeAnswer()}</div>
                {/* <div className='MakeAnswer'>{this.MakeAnswer()}</div> */}
            </div>
            
        )
    }
}

export default Cramer