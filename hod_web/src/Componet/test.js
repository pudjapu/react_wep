import React from 'react';
const axios = require('axios');


let apiUrl = "http://localhost:4200/member/"
let Name = document.querySelector('name')

class test extends React.Component{

    showData = (e) => {
        axios.get(apiUrl)
        .then(function (response) {
            
            console.log(response);
          })
          .catch(function (error) {
            console.log("error");
          })
          
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