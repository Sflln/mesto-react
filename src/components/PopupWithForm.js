import React from 'react';

function PopupWithForm({isOpen, onClose, name, title, children, submitForm, buttonName}) {
  return (
    <>
        <div className={`popup popup_type-${name} ${isOpen && "popup_opened"}`}>
            <div className="popup__container">
                <button className="popup__button-close" type="button" aria-label="Закрыть окно" onClick={onClose}/>
                <div className="popup__window">
                    <h2 className="popup__title">{title}</h2>
                    <form className={`popup__form popup__form_${name}`} name={`popupForm-${name}`} noValidate>
                    {children}
                    <button type="submit" className="popup__button-save" onClick={submitForm}>{buttonName}</button>
                    </form>
                </div>
            </div>
        </div>


        {/* <div className="popup popup_type-edit">
    <div className="popup__container">
      <button
        className="popup__button-close"
        type="button"
        aria-label="Закрыть окно"
      />
      <div className="popup__window">
        <h2 className="popup__title">Редактировать профиль</h2>
        <form
          className="popup__form popup__form_edit"
          name="popupForm"
          noValidate=""
        >
          <input
            id="name-input"
            type="text"
            minLength={2}
            maxLength={40}
            placeholder="Ваше имя"
            className="popup__input popup__input_form_name"
            defaultValue=""
            name="name"
            required=""
          />
          <span className="name-input-error popup__input-error" />
          <input
            id="job-input"
            type="text"
            placeholder="О себе"
            minLength={2}
            maxLength={200}
            className="popup__input popup__input_form_job"
            defaultValue=""
            name="about"
            required=""
          />
          <span className="job-input-error popup__input-error" />
          <button type="submit" className="popup__button-save">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  </div>
  <div className="popup popup_type-cards">
    <div className="popup__container">
      <button
        className="popup__button-close"
        type="button"
        aria-label="Закрыть окно"
      />
      <div className="popup__window">
        <h2 className="popup__title">Новое место</h2>
        <form
          className="popup__form popup__form_cards"
          name="formCards"
          noValidate=""
        >
          <input
            id="title-input"
            type="text"
            minLength={2}
            maxLength={30}
            placeholder="Название"
            className="popup__input popup__input_form_title"
            defaultValue=""
            name="name"
            required=""
          />
          <span className="title-input-error popup__input-error" title="" />
          <input
            id="link-input"
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_form_link"
            defaultValue=""
            name="link"
            required=""
          />
          <span className="link-input-error popup__input-error" />
          <button type="submit" className="popup__button-save">
            Создать
          </button>
        </form>
      </div>
    </div>
  </div>
  <div className="popup popup_type-img">
    <div className="popup__container popup__container_img">
      <button
        className="popup__button-close popup__button-close_img"
        type="button"
        aria-label="Закрыть окно"
      />
      <img src="#" className="popup__img" alt="" />
      <h1 className="popup__text" />
    </div>
  </div>
  <div className="popup popup_type-delite">
    <div className="popup__container">
      <button
        className="popup__button-close popup__button-close_delite"
        type="button"
        aria-label="Закрыть окно"
      />
      <div className="popup__window">
        <h2 className="popup__title popup__title_delite">Вы уверены?</h2>
        <button
          type="submit"
          className="popup__button-save popup__button-save_delite"
        >
          Да
        </button>
      </div>
    </div>
  </div>
  <div className="popup popup_type-avatar">
    <div className="popup__container">
      <button
        className="popup__button-close popup__button-close_avatar"
        type="button"
        aria-label="Закрыть окно"
      />
      <div className="popup__window">
        <h2 className="popup__title">Обновить аватар</h2>
        <form
          className="popup__form popup__form_avatar"
          name="formAvatar"
          noValidate=""
        >
          <input
            id="avatar-input"
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_form_avatar"
            defaultValue=""
            name="link"
            required=""
          />
          <span className="avatar-input-error popup__input-error" />
          <button type="submit" className="popup__button-save">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  </div> */}

    </>
  );
}

export default PopupWithForm;