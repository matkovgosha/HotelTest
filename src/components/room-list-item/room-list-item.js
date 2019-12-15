import React from 'react';

import { Link, withRouter } from 'react-router-dom';

const RoomListItem = ({ room }) => {
  const { id, title, price, coverImage } = room;

  const newPath = "room/" + id;


  return (
        <div className="item">
          <img src = {coverImage} alt="Room"/>
          <p className ="room-name">{title}</p>
          <div className="room-bonus"><img src = "img/Wifi.svg" alt="Wi-Fi"/>Wi-Fi</div>
          <div className="room-bonus"><img src = "img/Food.svg" alt="Food"/>3x разовое</div>
          <div className="room-bonus"><img src = "img/Vine.svg" alt="Mini-Bar"/>Минибар</div>

          <Link to = {newPath} >
            <button id ="BookButton"
            
            >Забронировать</button>
          </Link>
          <p className = "price">{price}&#36; за ночь</p>
        </div>
      );
};



export default withRouter(RoomListItem);
