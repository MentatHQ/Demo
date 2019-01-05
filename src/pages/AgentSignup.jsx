import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class AgentSignup extends React.Component {
  constructor(){
    super();
    this.state = {
      status: 'ready',
      email: '',
      name: ''
    }
  }

  async signup(e, state) {
    if (e) {
      e.preventDefault();
    }

    const errors = [
      state.name.length === 0 && 'name',
      (state.email.length === 0 || !state.email.match(/.+@.+\..+/)) && 'email'
    ].filter(e => e);
    if (errors.length === 0) {
      this.setState({ loading: true });

      try {
        await this.props.contract.agentSignUp(state.name, state.email);
        this.setState({ status: 'done', loading: false });
      } catch (errors) {
        this.setState({ errors, status: 'ready', loading: false });
      }
    } else {
      this.setState({ errors });
    }
  }

  render(){
    return (
      <div className="AgentSignup">
        { this.state.status === 'done' && <Redirect to="/" /> }
        <div className="Ready SplitScreen">
          <div className="FormArea Col40">
            <form onSubmit={ e => this.signup(e, this.state) }>
              { this.props.accounts &&
                <div className="Field">
                  <label>Ethereum account</label>
                  <div className="AccountHash">
                    { this.props.accounts[0] }
                  </div>
                </div>
              }
              <div className="Field">
                <label>Name</label>
                <input onChange={ e => this.setState({ name: e.target.value }) } value={ this.state.name } />
                { this.state.errors && this.state.errors.includes('name') &&
                  <div className="Error">
                    Please enter your full name.
                  </div>
                }
              </div>
              <div className="Field">
                <label>Email</label>
                <input onChange={ e => this.setState({ email: e.target.value }) } value={ this.state.email } />
                { this.state.errors && this.state.errors.includes('email') &&
                  <div className="Error">
                    Please enter a valid email.
                  </div>
                }
              </div>
              <div className="CenterText">
                <button className="Button gradient" type="submit">Sign Up</button>
              </div>
            </form>
          </div>
          <div className="IllustrationArea Col60 BlueBgd">
            <h2>Work anytime, anywhere</h2>
            <p>Join 10,000 Mentats who earn crypto by completing high skill tasks.</p>
          </div>
        </div>
      </div>
    );
  }
}

AgentSignup.propTypes = {
  contract: PropTypes.shape({
    agentSignUp: PropTypes.func.isRequired
  }),
  accounts: PropTypes.array
};

export default AgentSignup;
