var assign = require('object-assign');
var Dispatcher = require('flux').Dispatcher;

var AppDispatcher = assign(new Dispatcher(),{
  handleShit: function(){return 1}
});

module.exports = AppDispatcher;