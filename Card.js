import { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="card__container">
        <div className="card_image-wrapper"></div>
        <h4 className="card__title">{this.props.title}</h4>
        <p>{this.props.country}</p>
        <p className="price_style">{this.props.price}</p>
      </div>
    );
  }
}
export default Card;
