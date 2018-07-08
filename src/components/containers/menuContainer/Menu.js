import React, { Component } from "react";
import { Menu, Input } from "semantic-ui-react";
import TabMenu from "./TabMenu";
import TabMenu2 from "./TabMenu2";
import Sidebar from "./Sidebar";
import Custom from "./Custom";
import Grid from "./Grid";

export default class MenuExampleInverted extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu style={{ height: "50px" }}>
          <Menu.Item header>Journaler</Menu.Item>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="messages"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="friends"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        <TabMenu2 />
      </div>
    );
  }
}
