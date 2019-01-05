import React from 'react';
const MetaMaskExtensionUrl = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';

export default ({ exception }) => {
  switch ((exception && exception.message) || exception) {
    case 'no_web3':
      return (
        <div className="Web3Exception CenterContent">
          <h3>Before you can start, you have to unlock MetaMask.</h3>
          <div>
            <a href={ MetaMaskExtensionUrl } className="Button gradient" target="_blank" rel="noopener noreferrer">Install MetaMask</a>
          </div>
        </div>
      );
    case 'no_metamask':
      return (
        <div className="Web3Exception CenterContent">
          <h3>Mentat currently only supports MetaMask as a web3 provider.</h3>
          <div>
            <a href={ MetaMaskExtensionUrl } className="Button gradient" target="_blank" rel="noopener noreferrer">Install MetaMask</a>
          </div>
        </div>
      );
    case 'no_account':
      return (
        <div className="Web3Exception CenterContent">
          <h3>MetaMask detected - Please sign in using the extension then refresh.</h3>
        </div>
      );
    default:
      return (
        <div className="Web3Exception CenterContent">
          <h3>Unknown Error:</h3>
          <span className="exception">{ String(exception) }</span>
        </div>
      );
  }
}
