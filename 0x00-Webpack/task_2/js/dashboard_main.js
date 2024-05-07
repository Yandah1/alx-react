import '../css/main.css';
const $ = require('jquery');
const _ = require('lodash');

let count = 0;

$("<p>Holberton Dashboard</p>").appendTo('body');
$("<p>Dashboard data for the students</p>").appendTo('body');
$("<button>Click here to get started</button>").appendTo('body');
$("<p id='count'></p>").appendTo('body');
$("<p>Copyright - Holberton School</p>").appendTo('body');


function updateCounter() {
    count++;
    const countParagraph = document.getElementById('count');
    countParagraph.textContent = `${count} clicks on the button`;
}

const Counter = _.debounce(updateCounter, 300);

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('button');
    button.addEventListener('click', Counter);
});