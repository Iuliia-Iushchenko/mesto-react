import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupWithConfirmation (props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit();
  }

  return (
    <PopupWithForm name='popup-delete' title='Вы уверены?' height='popup__form_height-small' paddingSize='popup__title_padding_small' buttonText='Да' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}/>
  );
}

export default PopupWithConfirmation;
