import React from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `button ${isOwn ? 'button_delete button_delete_visible' : 'button_delete'}`
  );

  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `button button_like ${isLiked && 'button__like_active'}`;

  function handleClick() {
    props.onCardClick(props.card.name, props.card.link);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteCard() {
    props.onCardDelete(props.card)
  }

  return (
    <article className="gallery-card" key={props.card._id}>
      <img className="gallery-card__picture" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <button className={cardDeleteButtonClassName} onClick={handleDeleteCard} ></button>
      <div className="gallery-card__description">
        <h2 className="gallery-card__title">{props.card.name}</h2>
        <div className="gallery-card_like">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <span className="button_like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;


