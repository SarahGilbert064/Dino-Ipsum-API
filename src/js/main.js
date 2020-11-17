import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
// import { resolvePlugin } from '@babel/core';

function result(resultArray) {
  resultArray[0].forEach(function(element) {
    $(".showDino").append(element + " ");
  })
}

$(document).ready(function() {
  $('#genAmount').click(function() {
    const words = $("#words").val();
    $("#words").val("");

    let request = new XMLHttpRequest();
    const url = `http://dinoipsum.herokuapp.com/api/?format=json&words=${words}&paragraphs=1`;

    request.onload = function() {
      if (this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }
    
    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      result(response);
    }
  });
});

