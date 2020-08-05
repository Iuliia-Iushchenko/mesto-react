import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../context/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="page">
      <section className="profile">
        <div className="profile__container">
          <img className="profile__picture" src={currentUser.avatar} alt="Фото профиля" name="avatar" />
          <div className="profile__picture_edit" onClick={props.onEditAvatar}></div>
          <div className="profile__info">
            <div className="profile__edit">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button className="button button_edit" name="button_edit" type="button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__job">{currentUser.about}</p>
          </div>
        </div>
          <button className="button button_add" name="button_add" type="button" onClick={props.onAddPlace}></button>
      </section>

      {<section className="gallery">
      {props.cards.map((card) => <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
      )}
      </section>}

    </main>
  );
}

export default Main;
