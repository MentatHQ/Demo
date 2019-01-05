import React from 'react';
import PropTypes from 'prop-types';

const UserMenu = ({ title }) => (
  <div className="UserMenu">
    { title &&
      <h1>{ title }</h1>
    }
  </div>
);

UserMenu.propTypes = {
  title: PropTypes.string
};
UserMenu.defaultProps = {
  title: null
};

export default UserMenu;
