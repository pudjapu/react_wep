import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';

import '../css/bisecton.css';

class Bisection extends React.Component{

    state = {
        A: '0'
      };


    getvalu = (e) => {
        this.setState({
            A: e.target.value,
        });
    };

    show_value = (e) =>{
        console.log(this.state.A)
    }

    render(){
        return(
            <div className="allinbisetion">
            <h2>Bisection Method</h2>
            <div>
            <span><Input placeholder="x^3+4" onChange={this.getvalu} className="Input"/></span>
            <Button type="primary" onClick={this.show_value}>Calculate</Button>
            </div>
            <h1></h1>
            </div>

        );
    }
}
export default Bisection