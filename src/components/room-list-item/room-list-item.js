import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';


class RoomListItem extends Component {


  render(){

  const {room} = this.props;

  const { id, title, price, listImage, BooksDays } = room;

  const newPath = "room/" + id;

  let date = new Date();
  date.setDate(date.getDate() + BooksDays);
  
  let month = ("0" + (date.getMonth()+1)).slice(-2);

    if(BooksDays === 0){
      return (
          <div className="item">
            <img src = {listImage} alt="Room"/>
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
    }
    else {
      return (
          <div className="item">
            <img src = {listImage} alt="Room"/>
            <p className ="room-name">{title}</p>
            <div className = "book-text">Занято до {date.getDate()}.{month}  </div>
          </div>
      );
    }
  }
};


export default (withRouter(RoomListItem));