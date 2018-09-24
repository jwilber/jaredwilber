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
        <h1 className="jared"> jared wilber</h1>
        <center>
        <div id="outer">
          <p className="inner data_science">Data Science</p>
          <p className="inner information">Information Design</p>
          <p className="inner software">Software Engineering</p>
        </div>
        </center>
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
       
          <Grid settings={this.state} />
        </div>
        <center><span style={{'font-size':'1.4rem','color':'#ccc'}}>
        ©2018 Jared Wilber | Made with React, Redux, & D3.js</span></center>
      </div>
    );
  }
}
  

export default App;