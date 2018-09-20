import React, { PropTypes } from 'react';
import Card from './card/Card';
import Grid from './grid/Grid';
import Graph from './graph/Graph';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "grid-gap": true,
      "grid-template-columns": true
    };
  }

  render() {
    return (
      <div className='all'>  
      <center>
        <h1> Jared Wilber</h1> 
        <br/>
        <br /> 
        <Graph />
        <br/>
        <div className="about">
              <p>Hello!  I’m a recent graduate of UC Berkeley interested in data science, open-source software, and information design.I’m currently a data scientist at Neudesic. Previously, I was on the data science team at Classy.org. Feel free to reach out to me via <a href='mailto:jdwlbr@gmail.com'>email</a>, <a href='https://twitter.com/jdwlbr'>Twitter</a>, or <a href='https://github.com/jwilber'>GitHub</a>. <br/><br/>
            </p>
        </div>
        <hr className="hr_width"/>
          </center>

        <div className="p-4">
        <center>
          <div className="buttonHolders">

            {Object.keys(this.state).map(k => (
              
                <button
                  className="btn2"
                  onClick={() => this.setState({ [k]: !this.state[k] })}
                >
                  toggle <code>{k}</code>
                </button>
            ))}
          </div>
          </center>
          <Grid settings={this.state} />
        </div>
        <center><span style={{'font-size':'1.1rem','color':'#ccc'}}>
        ©2018 Jared Wilber | Made with React, Redux, & D3.js</span></center>
      </div>
    );
  }
}
  

export default App;