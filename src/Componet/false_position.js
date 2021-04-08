import React from 'react';

import { Input } from 'antd';
import { Button } from 'antd';

import '../css/false_position.css';

class False_position extends React.Component{

    state = {
        Equation: 'x*43-1',
        XL: '0.02',
        XR: '0.03',
        ERROR: '0.000001',
        result: '',
      };

    getEquation = (e) => {
        this.setState({
            Equation: e.target.value,
        });
    };

    getXL = (e) => {
        this.setState({
            XL: e.target.value,
        });
    };

    getXR = (e) => {
        this.setState({
            XR: e.target.value,
        });
    };

    getERR= (e) => {
        this.setState({
            ERROR: e.target.value,
        });
    };

    

    show_value = (e) =>{
        const Parser = require('expr-eval').Parser; // ฟั่งชั้นแปลงสมการ
        let i = 1;
        let arr = [];
        let err = 1;
        let Xnew;

        let Equation = this.state.Equation;
        let XL = this.state.XL;
        XL = parseFloat(XL);
        let XR = this.state.XR;
        XR = parseFloat(XR);
        let ERROR = this.state.ERROR;
        ERROR = parseFloat(ERROR);

        var expression = Parser.parse(Equation);

        let X = ((XL*expression.evaluate({ x: XR }))-(XR*expression.evaluate({ x: XL })))/(expression.evaluate({ x: XR })-expression.evaluate({ x: XL }))

        if(expression.evaluate({ x: X }) > 0){
            XR = X;
        }
        else{
            XL = X;
        }

        //(expression.evaluate({ x: X }) > 0) ? (XR = X) : (XL = X)

        while(err > ERROR){
            Xnew = ((XL*expression.evaluate({ x: XR }))-(XR*expression.evaluate({ x: XL })))/(expression.evaluate({ x: XR })-expression.evaluate({ x: XL }))

            if(expression.evaluate({ x: Xnew })*expression.evaluate({ x: XR })){
                XR = Xnew
            }
            else{
                XL = Xnew
            }

            //((expression.evaluate({ x: Xnew })*expression.evaluate({ x: XR })) > 0) ? (XR = Xnew) : (XL = Xnew)
            arr.push(<div className='result' key={i}>Iteration {i} : {Xnew}</div>);
            err = Math.abs((Xnew-X)/Xnew);
            X = Xnew;
            i++;
        }
        this.setState({result: arr})
    }

    render(){
        return(
            <div className="allincompro">
                <h2>False position</h2>
                <div>
                    <span><Input placeholder="x*43-1" onChange={this.getEquation} className="Input"/></span>
                    <span className="Calculate_Button"><Button type="primary" onClick={this.show_value} >Calculate</Button></span>
                </div>
                <div>
                    <span className="Text_Input_2"> XL : </span>
                    <span><Input placeholder="0.02" onChange={this.getXL} className="Input_2"/></span>
                    <span className="Text_Input_2"> XR : </span>
                    <span><Input placeholder="0.03" onChange={this.getXR} className="Input_2"/></span>
                    <span className="Text_Input_2"> ERROR : </span>
                    <span><Input placeholder="0.000001" onChange={this.getERR} className="Input_2"/></span>
                </div>
                {this.state.result}
            </div>
        )
    }

    
}

export default False_position;