import React, {useState, useEffect} from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen, onCardClick}){
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

   useEffect(() => {
    api.getUserData()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api.getInitialCards()
      .then(res => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return(<main className="main">
  <section className="profile">
  <div className="profile__union">
    <div className="profile__avatar-change">
      <img
        src={`${userAvatar}`}
        alt="аватар"
        className="profile__avatar"
      />
      <button
        className="profile__button-avatar"
        type="button"
        aria-label="Изменить аватар пользователя"
        onClick={isEditAvatarPopupOpen}
      />
    </div>
    <div className="profile__info">
      <div className="profile__union">
        <h1 className="profile__info-name">{userName}</h1>
        <button
          className="profile__button-edit"
          type="button"
          aria-label="Редактировать профиль"
          onClick={isEditProfilePopupOpen}
        />
      </div>
      <p className="profile__info-job">{userDescription}</p>
    </div>
  </div>
  <button
    className="profile__button-add"
    type="button"
    aria-label="Добавить карточку"
    onClick={isAddPlacePopupOpen}
  />
</section>
<section className="elements">
        {
          cards.map(card => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
            />
          ))
        }
      </section>
</main>)

}

export default Main;