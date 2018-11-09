import React, { Component } from 'react';

const axios = require("axios");

var apiUrl = "http://www.omdbapi.com/?t=";
var apiKey = "&apikey=45320732";

class Results extends Component {

  showResult = () => {
    var txtInput = document.getElementById('txtSearchMovie').value;
    if(this.validateForm()){
    axios.get(apiUrl + txtInput + apiKey)
      .then(function (response) {
        document.getElementById('Title').innerHTML = response.data.Title;
        document.getElementById('Genre').innerHTML = response.data.Genre;
        document.getElementById('Year').innerHTML = response.data.Released;
        document.getElementById('Rating').innerHTML = response.data.Rated;
        document.getElementById('Runtime').innerHTML = response.data.Runtime;
        document.getElementById('Director').innerHTML = response.data.Director;
        document.getElementById('Plot').innerHTML = response.data.Plot;
        document.getElementById('Actors').innerHTML = response.data.Actors;
        document.getElementById('Language').innerHTML = response.data.Language;
        document.getElementById('Awards').innerHTML = response.data.Awards;
        document.getElementById('Ratings').innerHTML = response.data.imdbRating;
        document.getElementById('BoxOffice').innerHTML = response.data.BoxOffice;
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  }

  validateForm() {
    var x = document.getElementById('txtSearchMovie').value;
    if (x == "") {
        alert("Fill in a damn movie title");
        return false;
    }
    return true;
  }

  render() {
    return (
      <div className="Table">
      <br/>
        <table align="center">
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
            <th >Date Released</th>
          </tr>
          <tr>
            <td id="Year"></td>
          </tr>
          <tr>
            <th >Age Rating</th>
          </tr>
          <tr>
            <td id="Rating"></td>
          </tr>
          <tr>
            <th >Runtime</th>
          </tr>
          <tr>
            <td id="Runtime"></td>
          </tr>
          <tr>
            <th >Director</th>
          </tr>
          <tr>
            <td id="Director"></td>
          </tr>
          <tr>
            <th >Actors</th>
          </tr>
          <tr>
            <td id="Actors"></td>
          </tr>
          <tr>
            <th >Plot</th>
          </tr>
          <tr>
            <td id="Plot"></td>
          </tr>
          <tr>
            <th >Language(s)</th>
          </tr>
          <tr>
            <td id="Language"></td>
          </tr>
          <tr>
            <th >Awards</th>
          </tr>
          <tr>
            <td id="Awards"></td>
          </tr>
          <tr>
            <th >iMDB Rating</th>
          </tr>
          <tr>
            <td id="Ratings"></td>
          </tr>
          <tr>
            <th >Cash Money (Box Office)</th>
          </tr>
          <tr>
            <td id="BoxOffice"></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Results;
