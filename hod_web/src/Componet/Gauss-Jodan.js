import React from 'react'
import '../css/Cramer.css'
import Matrix from './Source/Matrix'

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
    
    aDD = (e) =>{
        this.setState({rows: this.state.rows+1})
        let Matrix = this.state.Matrix;
        Matrix.push([]);
        this.setState({Matrix: Matrix})
    }

    render(){
        return(
            <div className='allincompro'>
                <Matrix n={this.state.rows} onChange={this.Input} />

                <button onClick={this.aDD}>+</button>
            </div>
            
        )
    }
}

export default Gauss_Elimination