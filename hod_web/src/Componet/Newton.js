import React from 'react'
import '../css/Newton.css'

class Newton_Raphson extends React.Component{

    state = {
        Equation: 'x*43-1',
        X: '0',
        ERROR: '',
        result: '',
    }

    render(){
        return(
            <div className='allincompro'>
                <h2>Newton Raphson</h2>
                <div>

                </div>
            </div>
        )
    }
}

export default Newton_Raphson