import React from "react";
import {
  Grid,
  Tab,
  Icon,
  Message,
  Button,
  Popup,
  Header
} from "semantic-ui-react";

const styles = {
  pane: {
    marginLeft: "10%",
    marginRight: "10%"
  }
};

// const panes = [
//   {
//     menuItem: "Tab 1",
//     render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>
//   },
//   {
//     menuItem: "Tab 2",
//     render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>
//   },
//   {
//     menuItem: "Tab 3",
//     render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>
//   }
// ];

class TabExampleBorderless extends React.Component {
  state = { header: "June" };

  handleChange = (e, data) => {
    console.log(e, e.target.value, data);
    this.setState({ header: `June ${data.activeIndex + 1}` });
  };
  renderMenuItems = () => {
    let tabs = [];
    // tabs.push({
    //   menuItem: "September"
    // });

    for (let i = 0; i < 31; i++) {
      let title = `${i + 1}`;
      // let isDisabled = false;
      // if (i === 29) {
      //   isDisabled = true;
      // }

      tabs.push({
        menuItem: {
          key: `tab ${title}`,
          style: { width: window.innerWidth / 31 },
          pointing: "true",

          // disabled: isDisabled,
          content: title
        },

        render: () => (
          <Grid.Column>
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column width={2}>
                  <Button
                    icon
                    labelPosition="left"
                    onClick={() => console.log("Back")}
                  >
                    <Icon name="left arrow" />
                    Prev Month
                  </Button>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Tab.Pane key={`pane ${title}`} attached={false}>
                    {title}
                  </Tab.Pane>
                </Grid.Column>
                <Grid.Column width={2}>
                  <Button
                    icon
                    labelPosition="right"
                    floated="right"
                    onClick={() => console.log("Forward")}
                  >
                    Next Month
                    <Icon name="right arrow" />
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        )
      });
    }

    return tabs;
  };

  render() {
    return (
      <div>
        <Header as="h1" textAlign="center">
          {this.state.header}
        </Header>
        <Grid>
          <Grid.Row>
            <Tab
              onTabChange={this.handleChange}
              style={{ marginLeft: "10px" }}
              menu={{
                borderless: true,
                secondary: false,
                tabular: true,
                vertical: false
              }}
              panes={this.renderMenuItems()}
            />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default TabExampleBorderless;
