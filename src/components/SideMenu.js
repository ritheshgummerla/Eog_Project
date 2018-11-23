import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.min.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import "../app.css";

export default class SelectedItem extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectedIndex: 0
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };
  render() {
    return (
      <List dense className="nav">
        <Link to="/" className="link">
          <ListItem
            button
            selected={this.state.selectedIndex === 0}
            onClick={event => this.handleListItemClick(event, 0)}
          >
            <i className="fa fa-home" />
            <span className="navText">Home</span>
          </ListItem>
        </Link>
        <Link to="/drone" className="link">
          <ListItem
            button
            selected={this.state.selectedIndex === 1}
            onClick={event => this.handleListItemClick(event, 1)}
          >
            <i className="fa fa-laptop" />
            <span className="navText">Dashboard</span>
          </ListItem>
        </Link>
        <Link to="/chart" className="link">
          <ListItem
            button
            selected={this.state.selectedIndex === 2}
            onClick={event => this.handleListItemClick(event, 2)}
          >
            <i className="fa fa-line-chart" />
            <span className="navText">
              Chart
            </span>
          </ListItem>
        </Link>
        <Link to="/Map" className="link">
          <ListItem
            button
            selected={this.state.selectedIndex === 3}
            onClick={event => this.handleListItemClick(event, 3)}
          >
            <i className="fa fa-map" />
            <span className="navText">
              Map
            </span>
          </ListItem>
        </Link>
      </List>
    );
  }
}
