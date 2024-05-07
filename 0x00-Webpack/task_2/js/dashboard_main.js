import '../css/main.css';
const $ = require('jquery');
const _ = require('lodash');
//const someModule = () => import('./index.html');


$("<div id='logo'> </div>").appendTo('body');
$("<p>Holberton Dashboard</p>").appendTo('body');
$("<p>Dashboard data for the students</p>").appendTo('body');
$("<button id='startBtn'>Click here to get started</button>").appendTo('body');
$("<p id='count'></p>").appendTo('body');
$("<p>Copyright - Holberton School</p>").appendTo('body');

let counter = 0;

const updateCounter = _.debounce(() => {
  counter++;
  $('#count').text(`${counter} clicks on the button`);
}, 500);

$('#startBtn').click(updateCounter);
