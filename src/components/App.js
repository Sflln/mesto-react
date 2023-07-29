import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditAvatarPopupOpen, setIsAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(props) {
    setSelectedCard(props);
  }

  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsAvatarPopupOpen(false);
    setIsProfilePopupOpen(false);
    setSelectedCard(null);
  }
  return (
      <div className="page">
        <Header />
        <Main 
        isEditAvatarPopupOpen={handleEditAvatarClick}
        isEditProfilePopupOpen={handleEditProfileClick}
        isAddPlacePopupOpen={handleAddPlaceClick}
        onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        title="Обновить аватар"
        name="avatar"
        buttonName="Сохранить"
      >
        <input
          className="popup__input popup__input_form_avatar"
          type="url"
          name="link"
          required
          placeholder="Ссылка на фотографию"
        />
        <span
          id="avatar-error"
          className="avatar-input-error popup__input-error"
        >
        </span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title="Новое место"
        name="cards"
        buttonName="Создать"
      >
        <input
          required
          id="title-input"
          name="name"
          type="text"
          className="popup__input popup__input_form_title"
          placeholder="Название"
          minLength="2"
          maxLength="30"
        />
        <span
          className="title-input-error popup__input-error">
        </span>
        <input
          id="link-input"
          required
          name="link"
          type="url"
          className="popup__input popup__input_form_link"
          placeholder="Ссылка на картинку"
        />
        <span
          className="link-input-error popup__input-error">
        </span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit"
        title="Редактировать профиль"
        buttonName="Сохранить"
      >
        <input
          required
          id="name-input"
          name="name"
          type="text"
          className="popup__input popup__input_form_name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
        />
        <span
          className="name-input-error popup__input-error">
        </span>
        <input
          required
          id="job-input"
          name="about"
          type="text"
          className="popup__input popup__input_form_job"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
        />
        <span
          className="job-input-error popup__input-error">
        </span>

      </PopupWithForm>
      <PopupWithForm
        onClose={closeAllPopups}
        name="confirm-delete"
        title="Вы уверены?"
        buttonName="Да"
      >
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
      
    </div>
 
  );
}

export default App;
