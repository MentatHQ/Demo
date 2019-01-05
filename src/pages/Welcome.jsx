import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div className="Welcome SplitScreen">
    <div className="AppCol Col50 CenterContent">
      <h2>Create Tasks</h2>
      <p className="Description">A decentralized market for on-demand human skill and intelligence, injected seamlessly into any application.</p>
      <div>
        <img src="/img/Applications.svg" className="Illustration" />
      </div>
      <div>
        {/* <Link to="/app/signup" className="Button gradient">Create a Requester account</Link> */}
        <p className="ComingSoon">Coming Soon</p>
      </div>
      {/* <p className="Signin-alt">Already have an account? <Link to="/app/signin">Sign in</Link></p> */}
    </div>
    <div className="AgentCol Col50 CenterContent BlueBgd">
      <h2>Earn Crypto</h2>
      <p className="Description">Join 10,000 Mentats who earn by completing high skill tasks.</p>
      <div>
        <img src="/img/Agents.svg" className="Illustration" />
      </div>
      <div>
        <Link to="/agent/signup" className="Button gradient">Create a Mentat account</Link>
      </div>
      <p className="Signin-alt">Already have an account? <Link to="/agent/signin">Sign in</Link></p>
    </div>
  </div>
);

export default Welcome;
