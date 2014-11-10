var React = require('react');

var Logo = React.createClass({
  render: function(){
    return(
      <div>
        <img id="logo" src="assets/img/logo.svg" />
      </div>
    )
  }
});

module.exports = Logo;