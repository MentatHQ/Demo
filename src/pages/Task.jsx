import React from "react";
import { ChatFeed, Message } from "react-chat-ui";

class Task extends React.Component {
  render() {
    return (
      <div className="Inner">
        <div className="Top">
          <h3 className="Buyer"> {this.props.buyer}</h3>
          <p className="Date">{this.props.date}</p>
        </div>
        <div>
          <div>
            <div className="Chats">
              <ChatFeed
                messages={this.props.messages}
                bubbleStyles={{
                  text: {
                    fontSize: 12
                  },
                  chatbubble: {
                    borderRadius: 70,
                    padding: 20
                  }
                }}
              />
            </div>
            <input
              type="text"
              placeholder="Type message..."
              onKeyPress={this.props.handleKeyPress}
              className="MessageInput"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
