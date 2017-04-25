'use strict';

var choo = require('choo');
var html = require('choo/html');

var app = choo();

app.use(function (state, bus) {
  state.hi = false;

  bus.on('hi', function () {
    state.hi = true;
    bus.emit('render');
  });
});

app.route('/', function (state, emit) {
  console.log('Hi: ' + state.hi);
  if (state.hi) {
    return html`<h3>Hi!</h3>`;
  }
  return html`<button onclick=${function () { emit('hi') }}>Click me</button>`;
});

var tree = app.start()

document.body.appendChild(tree);
