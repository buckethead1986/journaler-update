import React, { Component } from "react";

class CustomTabs extends Component {
  createDateDivs = () => {
    return (
      <div
        style={{ height: "20px", width: "10px", border: "2px solid green" }}
      />
    );
  };

  render() {
    return this.createDateDivs();
  }
}

export default CustomTabs;
