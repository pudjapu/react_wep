import React from 'react';
const axios = require('axios');


let apiUrl = "http://localhost:4200/member/1"
let results

class test extends React.Component{
    
    state = {
        item: [],
    }
    
    showData = (e) => {
        fetch(apiUrl)
          .then(results => results.json())
          .then(results => this.setState({item: results}))
        console.log(results)
    };

    render(){
        return(
            <div>
                <button onClick={this.showData}>XD</button>
            </div>
        )
        
    }
}

export default test