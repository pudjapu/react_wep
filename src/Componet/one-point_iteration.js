import React from 'react'

import { Input } from 'antd';
import { Button } from 'antd';

import '../css/one_point.css'

class One_point extends React.Component{

    state = {
        Equation: '(-0.6*x)+0.8',
        X: '0',
        ERROR: '0.000001',
        result: '',
      };
    
    getEquation = (e) => {
        this.setState({
            Equation: e.target.value,
        });
    };
    
    getX = (e) => {
        this.setState({
            X: e.target.value,
        });
    };

    show_value = (e) =>{

        const Parser = require('expr-eval').Parser;

        let i = 1;
        let arr = [];

        let Equation = this.state.Equation;
        let X = this.state.X;
        X = parseFloat(X);
        let ERROR = this.state.ERROR;
        ERROR = parseFloat(ERROR);

        var expression = Parser.parse(Equation);

        let x1,error_1;
        let err = 99999999;

        while(err > ERROR){
            x1 = expression.evaluate({ x: X })
            error_1 = Math.abs((x1-X)/x1)

            if(err === error_1){
                break;
            }
            arr.push(<div className='result' key={i}>Iteration {i} : {x1}</div>);
            i++;

            err = error_1;
            X = x1;
        }
        if(arr.length === 0){
            this.setState({result: 'Is Diverge'})
        }
        else{
            this.setState({result: arr})
        }
    }

    render(){
        return(
            <div className="allincompro">
                <h2>One-point iteration</h2>
                <div>
                    <span><Input placeholder="(-0.6*x)+0.8" onChange={this.getEquation} className="Input"/></span>
                    <span className="Calculate_Button"><Button type="primary" onClick={this.show_value} >Calculate</Button></span>
                </div>
                <div>
                <span className="Text_Input_2"> X เริ่มต้น : </span>
                    <span><Input placeholder="0" onChange={this.getX} className="Input_2"/></span>
                    <span className="Text_Input_2"> ERROR : </span>
                    <span><Input placeholder="0.000001" onChange={this.getERR} className="Input_2"/></span>
                </div>
                {this.state.result}
            </div>
        )
    }

}

export default One_point;