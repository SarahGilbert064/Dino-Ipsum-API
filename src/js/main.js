import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import DinoService from './dino-service.js';
// import { resolvePlugin } from '@babel/core';


$(document).ready(function() {
  $('#genAmount').click(function() {
    const words = $("#words").val();
    $("#words").val("");
    let promise = DinoService.getDino(words);
    promise.then(function(response) {
      const final = JSON.parse(response);
      function result(resultArray) {
        resultArray[0].forEach(function(element) {
          $(".showDino").append(final, element + " ");
        })
      }
    });
  });
});