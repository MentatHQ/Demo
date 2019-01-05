import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import pages from './pages';
import RouteWrapper from './elements/RouteWrapper';
import Web3Exception from './elements/Web3Exception';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isOnline: false
    };
  }

  componentDidMount() {
    this.statusFetcher = setTimeout(() => this.updateOnlineStatus(), 500);
  }

  async updateOnlineStatus() {
    if (this.props.accounts && this.props.accounts[0]) {
      const isOnline = await this.props.contract.isAgentOnline(this.props.accounts[0]);
      this.setState({ isOnline });
    }
    this.statusFetcher = setTimeout(() => this.updateOnlineStatus(), 15000);
  }

  render(){
    const props = this.props;
    const routeFilter = (
      props.accounts && props.accounts[0] ?
        this.state.isOnline ?
          (route => route.byPassRequirements || route.requireOnline && route.requireAccount) :
          (route => route.byPassRequirements || route.requireAccount) :
        (route => route.byPassRequirements || route.requireNoAccount)
    );

    return (
      <props.router context={{}} location={props.location}>
        <div className="Container">
          <header className="Banner CenterText">
            This demo assumes you are running the
            <a href="http://github.com/MentatHQ/SmartContract" target="_blank" rel="noopener nofollow noreferrer">Mentat Smart Contract</a>
            locally
            (via <a href="http://truffleframework.com/" target="_blank" rel="noopener nofollow noreferrer">Truffle</a>).
            You can interact with the contract directly in the console using window.mentat.
          </header>
          <div className="Content">
            { props.web3error ?
              // No web3 provided
              <Web3Exception exception={ props.web3error } /> :

              <Switch>
                { pages
                  .filter(routeFilter)
                  .map(route => (
                    <Route
                      key={route.path || 'notfound'}
                      path={route.path}
                      exact={route.exact}
                    >
                      <RouteWrapper preload={route.preload} {...route} {...props} { ...this.state }>
                        <route.component {...props} { ...this.state } />
                      </RouteWrapper>
                    </Route>
                  ))
                }
              </Switch>
            }
          </div>
        </div>
      </props.router>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string.isRequired
  }),
  contract: PropTypes.shape({
    isAgentOnline: PropTypes.func.isRequired
  }),
  accounts: PropTypes.array
};

export default App;
