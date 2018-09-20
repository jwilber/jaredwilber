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
      className={`card card--1 ${
          this.state.expanded ? "card--expanded" : ""
        }`}
      onClick={() => {
          this.setState({ expanded: !this.state.expanded });
        }}
        >
        <div>
          <div className="card__avatar" />
          <div className="card__title" />
          <div className="card__description" />
        </div>
      </div>
    );
  }
}

Card.randomNumber = Math.floor(Math.random() * 5) + 1;

export default Card;