var React = require("react");
var Reactdom = require("react-dom");
var App = require("./components/App");
require("./index.css")

Reactdom.render(
    <App/>,
    document.getElementById('app')
)