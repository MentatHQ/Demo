import React from 'react';
import LeftMenu from '../elements/LeftMenu';
import UserMenu from '../elements/UserMenu';

class AgentHome extends React.Component {
  render() {
    return (
      <div className="AgentHome SplitScreen">
        <LeftMenu {...this.props} />
        <main className="Overview">
          <UserMenu title="Overview" />
        </main>
      </div>
    );
  }
}

export default AgentHome;
