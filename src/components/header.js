import React from 'react';
import Navigation from './navigation';
class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <div className="container">
          <Navigation />
        </div>
      </div>
    );
  }
}

export default Header;
