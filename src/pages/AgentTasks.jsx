import React from 'react';
import PropTypes from 'prop-types';
import LeftMenu from '../elements/LeftMenu';
import UserMenu from '../elements/UserMenu';

class AgentTasks extends React.Component {
  constructor(){
    super();
    this.state = {
      status: 'loading'
    }
  }

  async componentDidMount() {
    try {
      const task = await this.props.contract.agentGetCurrentTask();
      this.setState({ status: 'ready', task });
    } catch (error) {
      this.setState({ status: 'error', error });
    }
  }

  render(){
    return (
      <div className="AgentHome SplitScreen">
        <LeftMenu {...this.props} />
        <main className="Tasks">
          <UserMenu title="Tasks" />
          { this.state.status === 'error' &&
            <div className="Error">
              { String(this.state.error) }
            </div>
          }
          <div className="Inner">
            { this.state.status === 'ready' && this.state.task &&
              <div className="Task">
                { JSON.stringify(this.state.task) }
                {/* <h2>{ this.state.task[0] }</h2>
                <p>{ this.state.task[1] }</p> */}
              </div>
            }
          </div>
        </main>
      </div>
    );
  }
}

AgentTasks.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string.isRequired
  }),
  contract: PropTypes.shape({
    agentGetCurrentTask: PropTypes.func.isRequired,
    agentSignIn: PropTypes.func.isRequired,
  }),
  accounts: PropTypes.array
};

export default AgentTasks;
