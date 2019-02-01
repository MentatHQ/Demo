import React from "react";
import Task from "../pages/Task";

class Main extends React.Component {
  state = {
    today: ""
  };

  async componentDidMount() {
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let year = d.getFullYear();
    this.setState({ today: date + " " + monthNames[month] + " " + year });
  }

  render() {
    if (this.props.page === "Tasks") {
      return (
        <Task
          buyer={this.props.buyer}
          date={this.state.today}
          messages={this.props.messages}
          handleKeyPress={this.props.handleKeyPress}
        />
      );
    }
  }
}

export default Main;
