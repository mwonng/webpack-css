import _ from 'lodash';
import './sass/desktop.scss';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  //
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());