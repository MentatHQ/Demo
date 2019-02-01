import React from "react";

class TopBar extends React.Component {
  render() {
    return (
      <div className="UserMenu">
        <h1>{this.props.title}</h1>
        <p className="Network">{this.props.network}</p>
        <span className="Dot" />
      </div>
    );
  }
}

export default TopBar;
