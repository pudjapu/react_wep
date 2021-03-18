import React from 'react'
import '../css/Cramer.css'
// import {AddMatrix,DelMatrix,MakeMatrix,Getvalue} from './Source/Matrix'

import { Input } from 'antd'
//import { Button } from 'antd'

class Gauss_Elimination extends React.Component{

    state = {
        rows: 2,
        columns: 2,
        Matrix: [[],[]],
        X: [],
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
            for(j = 0; j < columns+1;j++){
                wow.push(<span className="MyInput"><Input name={i.toString()+','+j.toString()} onChange={this.Getvalue} className="Input_2" style={{margin: '5px'}} value={this.state.Matrix[i][j]}/></span>)
            }
            wow.push(<div></div>)
        }
        // console.log(wow)
        return(wow);
    }


    Getvalue = (e) => {
        let arr = [];
        let Matrix = this.state.Matrix;
        arr = e.target.name.split(',');
        Matrix[parseInt(arr[0])][parseInt(arr[1])] = e.target.value;
        this.setState({Matrix: Matrix})
    }

    Calculate = (e) =>{

        let Matrix = this.state.Matrix;
        let rows = this.state.rows;
        rows = parseInt(rows);
        let columns = this.state.columns;
        columns = parseInt(columns);

        // make to fload
        let i,j,k
        for(i = 0 ;i < rows;i++){
            for(j = 0;j < columns+1;j++){
                Matrix[i][j] = parseFloat(Matrix[i][j])
            }
        }

        for(k = 0; k < 2; k++){

            for (j = k; j < Matrix.length-1; j++){
        
                // copy array
                var temp = [];
                for (i = 0; i < Matrix.length; i++)
                    temp[i] = Matrix[i].slice();
    
                let tem = temp[k][k];
                for(i = k; i < Matrix[0].length;i++){
                   temp[k][i] = temp[k][i]/tem*temp[j+1][k];
                   Matrix[j+1][i] = Matrix[j+1][i]-temp[k][i];
                }
    
            }
            
        }

        /// แก้ต่อด้วย

        let x3 = (Matrix[2][3]/Matrix[2][2]).toFixed(5);
        let x2 = ((Matrix[1][3]-(Matrix[1][2]*x3))/Matrix[1][1]).toFixed(5);
        let x1 = ((Matrix[0][3]-(Matrix[0][1]*x2)-(Matrix[0][2]*x3))/Matrix[0][0]).toFixed(5);

        console.log("x1 : " + x1);
        console.log("x2 : " + x2);
        console.log("x3 : " + x3);

    }

    render(){
        return(
            <div className='allincompro'>
                <h2>Gauss Elimination</h2>
                <div>
                    <button onClick={this.AddMatrix}>add row/column</button>
                    <button onClick={this.DelMatrix}>Del row/column</button>
                    <button onClick={this.Calculate}>Calculate</button>
                </div>
                <div className='MakeMatrix'>
                <div>{this.MakeMatrix()}</div>
                </div>
                {this.state.X}
            </div>
            
        )
    }
}

export default Gauss_Elimination