import React from 'react';
import Header from './Header';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import PopupWithConfirmation from './PopupWithConfirmation';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import api from '../utils/Api';
import { CurrentUserContext } from '../context/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isPopupWithConfirmationOpen, setIsPopupWithConfirmationOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [cardDelete, setCardDelete] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    name: '',
    link: ''
  });

  React.useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setCurrentUser(data);
    })
    .catch((err) => console.log(err));

    api.getInitialCards()
    .then((data) => {
      setCards(data)
    })
    .catch((err) => console.log(err))
  }, []);

  // Открытие попапов
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handlePopupwithConformationClick() {
    setIsPopupWithConfirmationOpen(true);
  }

  // Закрытие всех попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsPopupWithConfirmationOpen(false);
    setSelectedCard({
      isOpen: false,
      name: '',
      link: '' });
  }

  // Изменение имени и описания
  function handleUpdateUser(data) {
    api.setUserInfo(data.name, data.about)
    .then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    })
    .catch((err) => console.log(err))
  }

  // Изменение аватара
  function handleUpdateAvatar(data) {
    api.changeAvatar(data.avatar)
    .then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    })
    .catch((err) => console.log(err))
  }

  // Добавление карточки
  function handleAddPlaceSubmit(data) {
    api.createCard(data.name, data.link)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch((err) => console.log(err))
  }

  // Лайк/Дизлайк карточки
  function handleCardLike(card) {
    const isLiked = card.likes.some(item => item._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
    .catch((err) => console.log(err))
  }

  // Открытие попапа удаления конкретной карточки
  function handleCardDelete(card) {
    setCardDelete(card);
    handlePopupwithConformationClick();
  }

  // Удаление карточки
  function handleConfirmCardDelete() {
    api.deleteCard(cardDelete._id)
    .then(() => {
      setCards(cards.filter((c) => c._id !== cardDelete._id));
      closeAllPopups();
    })
    .catch((err) => console.log(err))
  }

  // Просмотр карточки
  function handleCardClick(name, link) {
    setSelectedCard({
      isOpen: true,
      name: name,
      link: link});
  }

  // Закрытие попапов на Esc
  function handleEscClose(e) {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  }

  // Закрытие попапов по клику на Оверлей
  function handlerOverlayClose(e) {
    if (e.target.classList.contains('popup')) {
      closeAllPopups();
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', handleEscClose);
    window.addEventListener('mousedown', handlerOverlayClose);

    return () => {
      window.removeEventListener('mousedown', handlerOverlayClose);
      window.removeEventListener('keydown', handleEscClose);
    };
  })

  return (
      <div className="App">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main cards={cards} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
          <PopupWithConfirmation isOpen={isPopupWithConfirmationOpen} onClose={closeAllPopups} onSubmit={handleConfirmCardDelete} />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlase={handleAddPlaceSubmit} />
          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
          <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
