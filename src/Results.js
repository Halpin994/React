import React, { Component } from 'react';

const axios = require("axios");

var apiUrl = "http://www.omdbapi.com/?t=";
var apiKey = "&apikey=45320732";

var movieTitle = document.querySelector("#Title");

class Results extends Component {

  showResult = () => {
    var txtInput = document.getElementById('txtSearchMovie').value;
    axios.get(apiUrl + txtInput + apiKey)
      .then(function (response) {
        alert(response.data.Title);
        document.getElementById('Title').innerHTML = response.data.Title;
        document.getElementById('Genre').innerHTML = response.data.Genre;
        document.getElementById('Year').innerHTML = response.data.Year;

      })
      .catch(function (error) {
        console.log(error);
      });


  }

  render() {
    return (
      <div className="Table">


      <br/>
        <table>
        <input type="text" id="txtSearchMovie"/>
        <button onClick={this.showResult}>Get</button>
          <tr>
            <th >Title</th>
          </tr>
          <tr>
            <td id="Title"></td>
         </tr>
         <tr>
           <th >Genre</th>
         </tr>
         <tr>
           <td id="Genre"></td>
        </tr>
        <tr>
          <th >Year Released</th>
        </tr>
        <tr>
          <td id="Year"></td>
       </tr>
        </table>
      </div>
    );
  }
}

export default Results;
