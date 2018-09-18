import React, { PropTypes } from 'react';
import Card from './card/Card';
import Grid from './grid/Grid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "grid-gap": false,
      "grid-template-columns": false
    };
  }

  render() {
    return (
      <div>
      <center>
        <h1> Jared Wilber</h1>  
        <div className='about'>
              <p>Hello!  I’m a recent graduate of UC Berkeley interested in data science, open-source software, and information design.I’m currently a data scientist at Neudesic. Previously, I was on the data science team at Classy.org. Feel free to reach out to me via <a href='mailto:jdwlbr@gmail.com'>email</a>, <a href='https://twitter.com/jdwlbr'>Twitter</a>, or <a href='https://github.com/jwilber'>GitHub</a>. <br/><br/>
            </p>
          </div>
          </center>

        <div className="p-4">
          <a href="https://github.com/aholachek/animate-css-grid">
            animate-css-grid
          </a>
          <div className="mb-4 pt-4">
            {Object.keys(this.state).map(k => (
              <button
                className="btn"
                onClick={() => this.setState({ [k]: !this.state[k] })}
              >
                toggle <code>{k}</code>
              </button>
            ))}
          </div>
          <Grid settings={this.state} />
        </div>
      </div>
    );
  }
}
  

export default App;