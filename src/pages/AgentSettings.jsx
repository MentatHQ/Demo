import React from 'react';
import PropTypes from 'prop-types';
import LeftMenu from '../elements/LeftMenu';
import UserMenu from '../elements/UserMenu';
import Tabs from '../elements/Tabs';
import ReactTable from "react-table";
import 'react-table/react-table.css'

class AgentSettings extends React.Component {
  constructor(){
    super();
    this.state = {
      status: 'loading',
      ethAddr: '0xd4FD252d7D2C9479a8d616F510eAC6243B5DDdf9',
      name: 'First Last',
      email: 'you@your.com'
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
// https://react-table.js.org/#/story/readme
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  // async componentDidMount() {
  //   try {
  //     const settings = await this.props.contract.agentGetSettings();
  //     this.setState({ status: 'ready', settings });
  //   } catch (error) {
  //     this.setState({ status: 'error', error });
  //   }
  // }

  render(){
    const data = [{
      date: '02-27 15:06',
      pair: 'ETH/MENT',
      type: 'BUY',
      price: 0.15786,
      filled: 5.0,
      fee: '0.026 MENT',
      total: '0.61 ETH'
    },{
      date: '02-27 15:08',
      pair: 'MENT/ETH',
      type: 'SELL',
      price: 0.15526,
      filled: 5.1,
      fee: '0.026 MENT',
      total: '0.62 ETH'
    },{
      date: '02-27 15:18',
      pair: 'ETH/MENT',
      type: 'BUY',
      price: 0.15726,
      filled: 5.2,
      fee: '0.036 MENT',
      total: '0.63 ETH'
    }];
  
    const columns = [{
      Header: 'Date',
      accessor: 'date' // String-based value accessors!
    },{
      Header: 'Pair',
      accessor: 'pair' // String-based value accessors!
    }, {
      Header: 'Type',
      accessor: 'type',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'price', // Required because our accessor is not a string
      Header: 'Price',
      accessor: d => d.price // Custom value accessors!
    }, {
      id: 'filled', // Required because our accessor is not a string
      Header: 'Filled',
      accessor: d => d.filled // Custom value accessors!
    },{
      Header: 'Fee',
      accessor: 'fee' // String-based value accessors!
    },{
      Header: 'Total',
      accessor: 'total' // String-based value accessors!
    }]
  

    return (
      <div className="AgentHome SplitScreen">
        <LeftMenu {...this.props} />
        <main className="Settings">
          <UserMenu title="Settings" />
          { this.state.status === 'error' &&
            <div className="Error">
              { String(this.state.error) }
            </div>
          }
          <div className="Inner">
            { this.state.status === 'ready' && this.state.settings &&
              <div>

              </div>
            }
                 <Tabs>
                  <div label="My Account">
                  <form onSubmit={this.handleSubmit}>
                  <label>
                    ETHEREUM ACCOUNT ADDRESS:
                    <input type="text" name="ethAddr" placeholder={this.state.ethAddr} onChange={this.handleInputChange} />
                  </label>
                  <label>
                    NAME:
                    <input type="text" name="name" placeholder={this.state.name} onChange={this.handleInputChange} />
                  </label>
                  <label>
                    EMAIL:
                    <input type="email" name="email" placeholder={this.state.email} onChange={this.handleInputChange} />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
                  </div>
                  <div label="My Skills">
                    <p>coming soon</p>
                  </div>
                  <div label="Transactions">
                  <ReactTable
                    data={data}
                    columns={columns}
                  />
                  </div>
                </Tabs>
          </div>
        </main>
      </div>
    );
  }
}

AgentSettings.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string.isRequired
  }),
  contract: PropTypes.shape({
    // agentGetSettings: PropTypes.func.isRequired,
    agentSignIn: PropTypes.func.isRequired,
  }),
  accounts: PropTypes.array
};

export default AgentSettings;
