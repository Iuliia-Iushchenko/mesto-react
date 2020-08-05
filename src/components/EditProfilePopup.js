import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../context/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm name='popup-edit' title='Редактировать профиль' buttonText='Сохранить' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}
    children={
        <>
        <input className="popup__input popup__input_name" id="name-input" type="text" name="name" minLength="2" maxLength="40" pattern="[A-Za-zА-ЯЁа-яё -]{1,}" placeholder="Имя" required value={name || ''} onChange={handleNameChange} />
        <span className="popup__input-error" id="name-input-error"></span>
        <input className="popup__input popup__input_job" id="job-input" type="text" name="job" minLength="2" maxLength="200" placeholder="О себе" required value={description || ''} onChange={handleDescriptionChange} />
        <span className="popup__input-error" id="job-input-error"></span>
      </>
    } />
  );
}

export default EditProfilePopup;
