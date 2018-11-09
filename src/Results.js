import React, {
  Component
} from 'react';

const axios = require("axios");

var apiUrl = "http://www.omdbapi.com/?t=";
var apiKey = "&apikey=45320732";

class Results extends Component {

  showResult = () => {
    var txtInput = document.getElementById('txtSearchMovie').value;
    axios.get(apiUrl + txtInput + apiKey)
      .then(function(response) {
        //alert(response.data.Title);
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

      })
      .catch(function(error) {
        console.log(error);
      });


  }

  render() {
    return ( <
      div className = "Table" >


      <
      br / >
      <
      table align = "center" >
      <
      input type = "text"
      id = "txtSearchMovie" / >
      <
      button onClick = {
        this.showResult
      } > Get < /button> <
      tr >
      <
      th > Title < /th> <
      /tr> <
      tr >
      <
      td id = "Title" > < /td> <
      /tr> <
      tr >
      <
      th > Genre < /th> <
      /tr> <
      tr >
      <
      td id = "Genre" > < /td> <
      /tr> <
      tr >
      <
      th > Date Released < /th> <
      /tr> <
      tr >
      <
      td id = "Year" > < /td> <
      /tr> <
      tr >
      <
      th > Age Rating < /th> <
      /tr> <
      tr >
      <
      td id = "Rating" > < /td> <
      /tr> <
      tr >
      <
      th > Runtime < /th> <
      /tr> <
      tr >
      <
      td id = "Runtime" > < /td> <
      /tr> <
      tr >
      <
      th > Director < /th> <
      /tr> <
      tr >
      <
      td id = "Director" > < /td> <
      /tr> <
      tr >
      <
      th > Actors < /th> <
      /tr> <
      tr >
      <
      td id = "Actors" > < /td> <
      /tr> <
      tr >
      <
      th > Plot < /th> <
      /tr> <
      tr >
      <
      td id = "Plot" > < /td> <
      /tr> <
      tr >
      <
      th > Language(s) < /th> <
      /tr> <
      tr >
      <
      td id = "Language" > < /td> <
      /tr> <
      tr >
      <
      th > Awards < /th> <
      /tr> <
      tr >
      <
      td id = "Awards" > < /td> <
      /tr> <
      /table> <
      /div>
    );
  }
}

export default Results;
