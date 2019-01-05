import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class LeftMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      status: 'initial'
    };
  }

  async signOut(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({ status: 'loading' });
    try {
      await this.props.contract.agentSignOut();
      this.setState({ status: 'done' });
    } catch (error) {
      this.setState({ status: 'error', error });
    }
  }

  render() {
    return (
      <div className="LeftMenu">
        <div className="Logo">
          <Link to="/">
            <img src="/img/logo-white.png" alt="Mentat" className="LogoWhiteImage" />
          </Link>
        </div>
        { this.state.status === 'error' &&
          <div className="Error margin-top">
            { String(this.state.error) }
          </div>
        }
        <ul className="MenuItems">
          <li><Link to="/">Overview</Link></li>
          <li><Link to="/agent/tasks">Tasks</Link></li>
          <li><Link to="/agent/reviews">Reviews</Link></li>
          <li><Link to="/agent/settings">Settings</Link></li>
          <li><Link to="#" onClick={ e => this.signOut(e) }>Logout</Link></li>
        </ul>
      </div>
    );
  }
}

LeftMenu.propTypes = {
  contract: PropTypes.shape({
    agentSignOut: PropTypes.func.isRequired
  }),
  accounts: PropTypes.array
};

export default LeftMenu;
