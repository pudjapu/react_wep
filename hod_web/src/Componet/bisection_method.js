import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';

import { bisection } from './Source/bisection'

import '../css/bisecton.css';

let apiUrl = "http://localhost:4040/root"

class Bisection extends React.Component{

    state = {
        Equation: 'x^4-13',
        XL: '',
        XR: '',
        ERROR: '',
        result: '',
      };

    async componentDidMount() {
        let response = await fetch(apiUrl);
        let data = await response.json();
        this.setState({Equation: data[0].eqtion,XL: data[0].xl,XR: data[0].xr,ERROR: data[0].error})
    }

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

        let data = bisection(this.state.XL,this.state.XR,this.state.ERROR,this.state.Equation);

        let i;
        let arr = [];

        for(i = 0; i < data.length;i++){
            arr.push(<div className='result' key={i}>Iteration {i+1} : {data[i][0]}</div>);
        }

        this.setState({result: arr});
    }

    render(){

        return(
            <div className="allinbisetion" >
                <div className="in_box">
                    <h2>Bisection Method</h2>
                    <div>
                        <span><Input placeholder="x^4-13" onChange={this.getEquation} className="Input"/></span>
                        <span className="Calculate_Button"><Button type="primary" onClick={this.show_value} >Calculate</Button></span>
                    </div>
                    <div>
                        <span className="Text_Input_2"> XL : </span>
                        <span><Input placeholder="1.5" onChange={this.getXL} className="Input_2"/></span>
                        <span className="Text_Input_2"> XR : </span>
                        <span><Input placeholder="2.0" onChange={this.getXR} className="Input_2"/></span>
                        <span className="Text_Input_2"> ERROR : </span>
                        <span><Input placeholder="0.000001" onChange={this.getERR} className="Input_2"/></span>
                    </div>
                    {this.state.result}
                </div>
            </div>

        );
    }
}
export default Bisection