import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class AgentSignin extends React.Component {
  constructor(){
    super();
    this.state = {
      status: 'ready'
    }
  }

  async signIn(e) {
    if (e) {
      e.preventDefault();
    }
    try {
      await this.props.contract.agentSignIn();
      this.setState({ status: 'done' });
    } catch (error) {
      this.setState({ status: 'error', error });
    }
  }

  render(){
    return (
      <div className="AgentSignin">
        { this.state.status === 'done' || this.props.isOnline && <Redirect to="/" /> }
        { this.state.status === 'error' &&
          <div className="Error">
            { String(this.state.error) }
          </div>
        }
        <div className="FullHeight CenterContent">
          <button className="gradient" onClick={ (e) => this.signIn(e) }>Sign In</button>
        </div>
      </div>
    );
  }
}

AgentSignin.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  contract: PropTypes.shape({
    agentSignIn: PropTypes.func.isRequired
  }),
  accounts: PropTypes.array
};

export default AgentSignin;
