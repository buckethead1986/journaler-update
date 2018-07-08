import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";

export default class SidebarExampleSidebar extends Component {
  state = { visible: true };

  // handleButtonClick = () => this.setState({ visible: !this.state.visible });

  // handleSidebarHide = () => this.setState({ visible: false });

  renderMenuItems = activeItem => {
    let tabs = [];
    for (let i = 0; i < 30; i++) {
      let title = `Tab ${i}`;
      tabs.push(
        <Menu.Item as="a">
          <Icon name="users" />
          {title}
        </Menu.Item>
      );
    }
    return tabs;
  };

  render() {
    const { visible } = this.state;

    return (
      <div>
        <Sidebar.Pushable as={Segment} style={{ height: "100vh" }}>
          <Sidebar
            as={Menu}
            animation="push"
            icon="labeled"
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="thin"
          >
            {this.renderMenuItems()}
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">Application Content</Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
