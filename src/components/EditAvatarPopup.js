import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../context/CurrentUserContext';

function EditAvatarPopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef();
  const [avatar, setAvatar] = React.useState('');

  React.useEffect(() => {
    setAvatar(currentUser.avatar);;
  }, [currentUser]);

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm name='popup-change' title='Обновить аватар' height='popup__form_height-medium' padding="popup__title_padding" buttonText='Сохранить' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}
    children={
      <>
        <input className="popup__input popup__input_link" id="url-input" type="url" name="link" placeholder="Ссылка на аватар" value={avatar || ''} required ref={avatarRef} onChange={handleAvatarChange}/>
        <span className="popup__input-error" id="url-input-error"></span>
      </>
    } />
  );
}

export default EditAvatarPopup;
