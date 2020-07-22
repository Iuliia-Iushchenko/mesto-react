import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={(props.isOpen ? `popup popup_opacity-normal ${props.name} popup_opened` : `popup popup_opacity-normal ${props.name}`)}>
      <div className="popup__container">
        <form className={`popup__form ${props.height}`} name={props.name} method='post' action="#">
          <h2 className={`popup__title ${props.padding} ${props.paddingSize}`}>{props.title}</h2>
          {props.children}
          <button className="popup__button button button_submit" type="submit">{props.buttonText}</button>
        </form>
          <button className="button button_close popup-change__close" type="button" onClick={props.onClose}></button>
      </div>
     </div>
  );
}

export default PopupWithForm;
