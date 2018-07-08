import React from "react";
import { Button, Popup } from "semantic-ui-react";

const PopupExample = props => (
  <Popup trigger={<Button icon="add" />} content="Add users to your feed" />
);

export default PopupExample;
