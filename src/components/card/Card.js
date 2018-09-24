import React from 'react';
import { Link } from 'react-router';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  render() {
    return (
      <div
      className={`card card--3 ${
          this.state.expanded ? "card--expanded" : ""
        }`}
      onClick={() => {
          this.setState({ expanded: !this.state.expanded });
        }}
        >
        <div>
          <h2>Makefiles for Data Science</h2>
          <div className="card__description" />
          <div class="middle">
    <div class="text">
        <p>Amid all of my frustration, Matt suggested ditching the SVG altogether, making the bars out of div elements with a background-color and aligning them using Flexbox. To be totally honest.</p>
    </div>
  </div>
        </div>
      </div>
      
    );
  }
}

Card.randomNumber = Math.floor(Math.random() * 5) + 1;

export default Card;

