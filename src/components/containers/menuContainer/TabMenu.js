import React, { Component } from "react";
import { Menu, Input, Icon } from "semantic-ui-react";

export default class MenuExampleInverted extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name }, () =>
      console.log(this.state.activeItem)
    );

  renderMenuItems = activeItem => {
    let tabs = [];
    for (let i = 0; i < 30; i++) {
      let title = `Tab ${i}`;
      tabs.push(
        <Menu.Item
          key={title}
          name={title}
          active={activeItem === { title }}
          onClick={this.handleItemClick}
        >
          <Icon name="check circle" style={{ color: "#33cc00" }} />
          {title}
        </Menu.Item>
      );
    }
    return tabs;
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu icon="labeled" style={{ overflow: "scroll", marginTop: 0 }}>
        {this.renderMenuItems(this.state.activeItem)}
      </Menu>
    );
  }
}
