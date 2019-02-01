import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import LeftMenu from "./elements/LeftMenu";
import TopBar from "./elements/TopBar";
import Main from "./elements/Main";
import web3 from "./web3";
import socketIOClient from "socket.io-client";
import { ChatFeed, Message } from "react-chat-ui";

const socket = socketIOClient("http://localhost");

class App extends Component {
  state = {
    title: "Tasks",
    network: "Not Connected",
    buyer: "guitarcenter.com",
    messages: []
  };

  async componentDidMount() {
    if (web3.currentProvider.isMetaMask) {
      await web3.eth.currentProvider.enable();
    }

    let network = await web3.eth.net.getNetworkType();
    if (network === "ropsten") {
      this.setState({ network: "Ropsten Test Network" });
    }

    socket.on("send-message", message => {
      this.addMessage(1, message);
    });
  }

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.addMessage(0, e.target.value);
      e.target.value = "";
    }
  };

  addMessage(_id, _message) {
    var joined = this.state.messages.concat(
      new Message({ id: _id, message: _message })
    );
    this.setState({ messages: joined });
    if (_id === 0) {
      socket.emit("send-message", _message);
    }
  }

  render() {
    return (
      <Router>
        <div className="Container">
          <header className="Banner CenterText">
            You must have <a href="https://metamask.io/Metamask">Metamask</a>{" "}
            installed and be on the Ropsten testnet for this demo to work.
          </header>
          <div className="AgentHome SplitScreen">
            <LeftMenu />
            <main>
              <TopBar title={this.state.title} network={this.state.network} />
              <Main
                page={this.state.title}
                buyer={this.state.buyer}
                messages={this.state.messages}
                handleKeyPress={this.handleKeyPress.bind(this)}
              />
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
