import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card.name, props.card.link);
  }

  return (
    <article className="gallery-card" key={props.card._id}>
      <img className="gallery-card__picture" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <button className="button button_delete"></button>
      <div className="gallery-card__description">
        <h2 className="gallery-card__title">{props.card.name}</h2>
        <div className="gallery-card_like">
          <button className="button button_like" type="button"></button>
          <span className="button_like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;


