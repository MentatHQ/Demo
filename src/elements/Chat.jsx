import React from 'react';
const IPFS = require('ipfs')
const Room = require('ipfs-pubsub-room');

function repo() {
  return 'ipfs/mentat/1'
}

class Chat extends React.Component {
  constructor(){
    super();
    this.state = {
      ready: false,
      text: '',
      history: []
    }
  }

  componentDidMount() {
    console.log('Load IPFS');
    const ipfs = new IPFS({
      repo: repo(),
      EXPERIMENTAL: {
        pubsub: true
      },
      config: {
        Addresses: {
          Swarm: [
            '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star'
          ]
        }
      }
    })

    ipfs.once('ready', () => ipfs.id((err, info) => {
      if (err) { throw err }
      this.pushHistory('IPFS node ready with address ' + info.id)
      this.setState({ ready: true });

      this.room = Room(ipfs, 'MentatAgents');
      window.room = this.room;

      // this.room.on('peer joined', (peer) => this.pushHistory('peer ' + peer + ' joined'))
      // this.room.on('peer left', (peer) => this.pushHistory('peer ' + peer + ' left'))

      // send and receive messages
      // this.room.on('peer joined', (peer) => this.room.sendTo(peer, 'Hello ' + peer + '!'))
      this.room.on('message', (message) => this.pushHistory('got message from ' + message.from + ': ' + message.data.toString()))
    }));
  }

  pushHistory(msg) {
    this.setState({ history: this.state.history.concat(msg) })
  }

  pushMessage(e, msg) {
    e.preventDefault();
    if (msg) {
      this.room.broadcast(msg);
    }
  }

  render(){
    return (
      <div className="Chat">
        { this.state.history.map((msg, i) => (<p key={i}>{ msg }</p>)) }
        { this.state.ready &&
          <form className="ChatInput" onSubmit={ e => {
            this.pushMessage(e, this.state.text);
            this.setState({ text: '' })
          } }>
            <input value={ this.state.text } onChange={ e => this.setState({ text: e.target.value }) } />
          </form>
        }
      </div>
    );
  }
}

export default Chat;
