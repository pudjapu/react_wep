import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';

import '../css/bisecton.css';

class Bisection extends React.Component{

    state = {
        Equation: '0',
        XL: '1.0',
        XR: '2.0',
        ERROR: '0.0001',
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
        console.log(this.state.Equation)

        let Equation = this.state.Equation
        Equation = eval(Equation)

        console.log(Equation)
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
                        <span><Input placeholder="1.0" onChange={this.getvalu} className="Input_2"/></span>
                        <span className="Text_Input_2"> XR : </span>
                        <span><Input placeholder="2.0" onChange={this.getvalu} className="Input_2"/></span>
                        <span className="Text_Input_2"> ERROR : </span>
                        <span><Input placeholder="0.0001" onChange={this.getvalu} className="Input_2"/></span>
                    </div>
                </div>
            </div>

        );
    }
}
export default Bisection