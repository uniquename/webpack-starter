import _ from 'lodash';

import './style.css';
import './styles.scss';

import $ from 'jquery';

import 'bootstrap';


//import './index.html';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
   element.innerHTML = _.join(['Hello there', 'webpack'], ' ');

  element.classList.add('hello');

  return element;
}

//document.body.appendChild(component());


$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});
