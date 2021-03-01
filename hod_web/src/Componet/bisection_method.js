import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';

import '../css/bisecton.css';

class Bisection extends React.Component{

    state = {
        Equation: '0',
        XL: null,
        XR: null,
        ERROR: null,
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

    getX = (x,Equation) =>{
        let c = eval(Equation)
        return c;
    }

    show_value = (e) =>{

        //const Parser = require('expr-eval').Parser;

        let Equation = this.state.Equation;
        Equation = Equation.replaceAll('^','**');
        let XL = this.state.XL;
        //console.log(Equation);
        XL = parseFloat(XL);
        let XR = this.state.XR;
        XR = parseFloat(XR);
        let ERR = this.state.ERROR;
        ERR = parseFloat(ERR);

        //console.log(this.getX(0,Equation));

        let Xmid = (XL+XR)/2;
        let XM = 0;
        let errer_sum = 1;
        
        let result = this.getX(Xmid,Equation) * this.getX(XR,Equation);

        if(result < 0){
            XL = Xmid;
        }
        else{
            XR = Xmid;
        }

        console.log(errer_sum);
        console.log(ERR);

        while(errer_sum > ERR){
            XM = (XL+XR)/2;

            console.log(XM);

            result = this.getX(XM,Equation) * this.getX(XR,Equation);
            console.log(result);
            (result < 0) ? (XL = XM) : (XR = XM);

            errer_sum = Math.abs((XM-Xmid)/XM);
            Xmid = XM;

        }

        console.log(XM);
    }

    render(){
        return(
            <div className="allinbisetion" >
                <div className="in_box">
                    <h2>Bisection Method</h2>
                    <div>
                        <span><Input placeholder="x^3+4" onChange={this.getEquation} className="Input"/></span>
                        <span className="Calculate_Button"><Button type="primary" onClick={this.show_value} >Calculate</Button></span>
                    </div>
                    <div>
                        <span className="Text_Input_2"> XL : </span>
                        <span><Input placeholder="1.0" onChange={this.getXL} className="Input_2"/></span>
                        <span className="Text_Input_2"> XR : </span>
                        <span><Input placeholder="2.0" onChange={this.getXR} className="Input_2"/></span>
                        <span className="Text_Input_2"> ERROR : </span>
                        <span><Input placeholder="0.0001" onChange={this.getERR} className="Input_2"/></span>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

        );
    }
}
export default Bisection