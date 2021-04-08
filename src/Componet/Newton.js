import React from 'react'
import '../css/Newton.css'

import {derivative} from 'mathjs'

import { Input } from 'antd';
import { Button } from 'antd';

class Newton_Raphson extends React.Component{

    state = {
        Equation: "x^2-7",
        X: '2',
        ERROR: '0.000001',
        result: '',
    }

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
        let Equation_def = derivative(Equation,"x").toString();
        let X = this.state.X;
        X = parseFloat(X);
        let ERROR = this.state.ERROR;
        ERROR = parseFloat(ERROR);

        var expression_1 = Parser.parse(Equation);
        var expression_2 = Parser.parse(Equation_def);

        let X_new = X - (expression_1.evaluate({x : X})/expression_2.evaluate({x : X}));

        let error_ = Math.abs((X_new-X)/X);

        while(error_ > ERROR){

            X_new = X - (expression_1.evaluate({x : X})/expression_2.evaluate({x : X}));
            error_ = Math.abs((X_new-X)/X);
            X = X_new;
            arr.push(<div className='result' key={i}>Iteration {i} : {X_new}</div>);
            i++;
        }
        this.setState({result: arr})
    }

    render(){
        return(
            <div className='allincompro'>
                <h2>Newton Raphson</h2>
                <div>
                <span><Input placeholder="x^2-7" onChange={this.getEquation} className="Input"/></span>
                    <span className="Calculate_Button"><Button type="primary" onClick={this.show_value} >Calculate</Button></span>
                </div>
                <div>
                    <span className="Text_Input_2"> X เริ่มต้น : </span>
                    <span><Input placeholder="2" onChange={this.getX} className="Input_2"/></span>
                    <span className="Text_Input_2"> ERROR : </span>
                    <span><Input placeholder="0.000001" onChange={this.getERR} className="Input_2"/></span>
                </div>
                {this.state.result}
            </div>
        )
    }
}

export default Newton_Raphson