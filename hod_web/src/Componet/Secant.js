import React from 'react'
import '../css/Secant.css'

import { Input } from 'antd';
import { Button } from 'antd';

class Secant extends React.Component{

    state = {
        Equation: "x^2-7",
        X_1: '2.0',
        X_2: '2.2',
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
            X_1: e.target.value,
        });
    };

    getX_2 = (e) => {
        this.setState({
            X_2: e.target.value,
        });
    };

    show_value = (e) =>{
        
        const Parser = require('expr-eval').Parser;

        let i = 1;
        let arr = [];

        let Equation = this.state.Equation;
        let X_1 = this.state.X_1;
        X_1 = parseFloat(X_1);
        let X_2 = this.state.X_2;
        X_2 = parseFloat(X_2);
        let ERROR = this.state.ERROR;
        ERROR = parseFloat(ERROR);

        var expression = Parser.parse(Equation);

        let d = X_1 - X_2;
        let Fan,Xnew;
        let err_ = 1;

        while(err_ > ERROR){
            X_2 = X_1 + d;
            Fan = - ((expression.evaluate({x: X_2})*(X_1-X_2))/(expression.evaluate({x: X_1})-expression.evaluate({x: X_2})))
            Xnew = X_2 + Fan;

            err_ = Math.abs((Xnew-X_1)/Xnew);
            arr.push(<div className='result' key={i}>Iteration {i} : {Xnew}</div>);
            X_1 = Xnew;
            i++;
        }
        this.setState({result: arr})

    }

    render(){
        return(
            <div className='allincompro'>
                <h2>Secant</h2>
                <div>
                <span><Input placeholder="x^2-7" onChange={this.getEquation} className="Input"/></span>
                    <span className="Calculate_Button"><Button type="primary" onClick={this.show_value} >Calculate</Button></span>
                </div>
                <div>
                    <span className="Text_Input_2"> X 1 : </span>
                    <span><Input placeholder="2.0" onChange={this.getX} className="Input_2"/></span>
                    <span className="Text_Input_2"> X 2 : </span>
                    <span><Input placeholder="2.2" onChange={this.getX_2} className="Input_2"/></span>
                    <span className="Text_Input_2"> ERROR : </span>
                    <span><Input placeholder="0.000001" onChange={this.getERR} className="Input_2"/></span>
                </div>
                {this.state.result}
            </div>
        )
    }
}

export default Secant