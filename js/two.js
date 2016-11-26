const _ = require('lodash');
const $ = require('jquery');

let ar = [
  {
    name: "ty"
  },
  {
    name: "cindy"
  },
  {
    name: "johnny"
  }
]

let t = _.map(ar, x => x.name);

$('h2').html(t);
