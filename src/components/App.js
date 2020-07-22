import React from 'react';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';



function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    name: '',
    link: ''
  });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(name, link) {
    setSelectedCard({
      isOpen: true,
      name: name,
      link: link});
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({
      isOpen: false,
      name: '',
      link: '' });
  }

  return (
    <div className="App">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>
      <PopupWithForm name='popup-delete' title='Вы уверены?' height='popup__form_height-small' paddingSize='popup__form_height-small' buttonText='Да' />
      <PopupWithForm name='popup-edit' title='Редактировать профиль' buttonText='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
          children={
              <>
                  <input className="popup__input popup__input_name" id="name-input" type="text" name="name" minLength="2" maxLength="40" pattern="[A-Za-zА-ЯЁа-яё -]{1,}" placeholder="Имя" required />
                  <span className="popup__input-error" id="name-input-error"></span>
                  <input className="popup__input popup__input_job" id="job-input" type="text" name="job" minLength="2" maxLength="200" placeholder="О себе" required />
                  <span className="popup__input-error" id="job-input-error"></span>
              </>
          } />
      <PopupWithForm name='popup-change' title='Обновить аватар' height='popup__form_height-medium' padding="popup__title_padding" buttonText='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
          children={
              <>
                  <input className="popup__input popup__input_link" id="url-input" type="url" name="link" placeholder="Ссылка на аватар" required />
                  <span className="popup__input-error" id="url-input-error"></span>
              </>
      } />
      <PopupWithForm name='popup-add' title='Новое место' padding="popup__title_padding" buttonText='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
          children={
              <>
                  <input className="popup__input popup__input_title" id="title-input" type="text" name="title" placeholder="Название" minLength="1" maxLength="30"required/>
                  <span className="popup__input-error" id="title-input-error"></span>
                  <input className="popup__input popup__input_path" id="url-input" type="url" name="path" placeholder="Ссылка на картинку" required />
                  <span className="popup__input-error" id="url-input-error"></span>
              </>
          } />
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      <Footer />
    </div>
  );
}

export default App;
