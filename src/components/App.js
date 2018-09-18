import React, { PropTypes } from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p> Header here...</p>
        <center><h1>Jared Wilber</h1></center>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;