import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../context/CurrentUserContext';

function AddPlacePopup (props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cardName, setCardName] = React.useState('');
  const [cardLink, setCardLink] = React.useState('');

  React.useEffect(() => {
    setCardName(currentUser.cardName);
    setCardLink(currentUser.link)
  }, [currentUser]);

  function handleCardNameAdd(e) {
    setCardName(e.target.value);
  }

  function handleCardLinkAdd(e) {
    setCardLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlase({
      name: cardName,
      link: cardLink,
    });
  }

  return (
    <PopupWithForm
    name='popup-add'title='Новое место' padding="popup__title_padding" buttonText='Создать' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}
    children={
        <>
          <input className="popup__input popup__input_title" id="title-input" type="text" name="title" placeholder="Название" minLength="1" maxLength="30" required value={cardName || ''} onChange={handleCardNameAdd} />
          <span className="popup__input-error" id="title-input-error"></span>
          <input className="popup__input popup__input_path" id="url-input" type="url" name="path" placeholder="Ссылка на картинку" required value={cardLink || ''} onChange={handleCardLinkAdd} />
          <span className="popup__input-error" id="url-input-error"></span>
        </>
    } />
  );
}

export default AddPlacePopup;
