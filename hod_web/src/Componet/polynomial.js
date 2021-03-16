import React from 'react'
import '../css/polynomial.css'
import { Input } from 'antd'

class Polynomial extends React.Component{

    state = {
        rows: 2,
        Matrix: [[],[]],
        Answer: [],
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
        let columns = 2;

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

    render(){
        return(
            <div className='allincompro'>
                <div>
                    <button onClick={this.AddMatrix}>add Point</button>
                    <button onClick={this.DelMatrix}>Del Point</button>
                </div>
                <div>{this.MakeMatrix()}</div>
            </div>
        )
    }
}

export default Polynomial