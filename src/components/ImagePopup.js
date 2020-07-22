import React from 'react';

function ImagePopup(props) {
  return (
    <div className={(props.card.isOpen ? `popup popup_opacity popup-card popup_opened` : `popup popup_opacity popup-card`)}>
        <div className="popup__container">
          <figure className="popup__frame">
            <img className="popup__image" alt={props.card.name} src={props.card.link}/>
            <figcaption className="popup__caption">{props.card.name}</figcaption>
          </figure>
          <button className="button button_close popup-card__close" type="button" onClick={props.onClose}></button>
        </div>
    </div>
  );
}

export default ImagePopup;
