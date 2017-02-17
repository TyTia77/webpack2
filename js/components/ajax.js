'use strict'

const $ = require('jquery');

// function ajax(){
//     var xhttp = new XMLHttpRequest();
//
//     var ok = xhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//
//             var response = JSON.parse(this.responseText);
//             response.forEach(function(v){
//                 console.log(v);
//             });
//         }
//     };
//
//     xhttp.open('get', '../api/users.json', true);
//     xhttp.send();
// }

// ajax();

// jquery
$.get('../data/users.json', function(v){
    v.forEach(function(i){
        console.log(i.name)
    })
});
