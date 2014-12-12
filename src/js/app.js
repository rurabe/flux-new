var React = require('react');
var Logo = require('./components/Logo');

var App = React.createClass({
  render: function(){
    return(
      <div>
        <Logo />
      </div>
    )
  }
});

React.render(<App />,document.getElementById('reactMain'));
