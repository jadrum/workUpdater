require('babel-register')();

let jsdom = require('jsdom').jsdom;

global.document = jsdom('');
let view = document.defaultView;
global.window = view;

let exposedProperties = [].concat(['window', 'navigator', 'document'], Object.keys(view).map((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = view[property];
    return property;
  }
}));

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;
