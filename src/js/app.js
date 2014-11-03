var React = require('react');

var App = React.createClass({
  render: function(){
    return(
      <h1>React New</h1>
    )
  }
});

React.render(<App />,document.getElementById('reactMain'));