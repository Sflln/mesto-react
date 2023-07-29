import React from "react";

function Card({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card)
      }
  return (
    <div id="card">
      <div className="element">
        <button className="element__button-delete" type="button" aria-label="удалить" />
        <img src={card.link} alt="картинка" className="element__img" onClick={handleClick} />
        <div className="element__unit">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__unit element__unit_like">
            <button className="element__button-like" type="button" aria-label="лайк" />
            <p className="element__likes">{card.likes.length}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Card;