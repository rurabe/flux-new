var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;

var Logo = require('./components/logo');

var App = React.createClass({
  render: function(){
    return(
      <this.props.activeRouteHandler />
    )
  }
});

React.render((
  <Routes location="history">
    <Route path="/" handler={App}>
      <DefaultRoute handler={Logo} />
    </Route>
  </Routes>
), document.getElementById('reactMain'));
