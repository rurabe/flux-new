var React = require('react');
var Logo = require('./components/logo');

var App = React.createClass({
  render: function(){
    return(
      <Logo />
    )
  }
});

React.render(<App />,document.getElementById('reactMain'));