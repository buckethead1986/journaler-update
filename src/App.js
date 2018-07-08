import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Menu from "./components/containers/menuContainer/Menu";

class App extends Component {
  render() {
    return (
      <div>
        <Menu store={this.props.store} />
      </div>
    );
  }
}

export default withRouter(App);
