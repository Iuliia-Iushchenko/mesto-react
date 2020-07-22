import React from 'react';
import avatarPath from '../images/profile_image.jpg';
import api from './Api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('Жак Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState(avatarPath);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
    .catch((err) => console.log(err))

    api.getInitialCards()
    .then((data) => {
      setCards(data)
    })
    .catch((err) => console.log(err))
  }, [])


  return (
    <main className="page">
      <section className="profile">
        <div className="profile__container">
          <img className="profile__picture" src={userAvatar} alt="Фото профиля" name="avatar" />
          <div className="profile__picture_edit" onClick={props.onEditAvatar}></div>
          <div className="profile__info">
            <div className="profile__edit">
              <h1 className="profile__name">{userName}</h1>
              <button className="button button_edit" name="button_edit" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
          <button className="button button_add" name="button_add" type="button" onClick={props.onAddPlace}></button>
      </section>

      {<section className="gallery">
      {cards.map((card) => <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
      )}
      </section>}

    </main>
  );
}

export default Main;
