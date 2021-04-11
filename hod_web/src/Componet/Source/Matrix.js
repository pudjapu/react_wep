import React from 'react'
import { Input } from 'antd'
// import './MatrixInput.css'

class Matrix extends React.Component{

    createMatrix(){
        let arrMatrix = []
        for(let i=0;i<this.props.n;i++){
            for(let j=0;j<this.props.n+1;j++){
                arrMatrix.push(<Input className='matrix-input' name={i.toString()+','+j.toString()} onChange={this.props.onChange}/>)
            }
            arrMatrix.push(<div></div>)
        }
        return arrMatrix
    }

    render(){
        return(
            <div>
                {this.createMatrix()}
            </div>
        )
    }
}

export default Matrix