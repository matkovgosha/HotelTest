import React from 'react';

import { Link } from 'react-router-dom';

import './room-details.css';

const RoomDetails = () => {
  return(
  	<div className = "Room-Wrapper">
  		<Link to="/">
      <div className = "BackButton"> <span>&lt;</span>Назад</div>
      </Link>
  		<div className = "Main-Info">
  			<div className = "img">
  				<img src = "img/Room2.png" alt="Room"/>
          <div className = "Short-img">
            <div className = "Room-Img1"><img src = "img/Room1-1.png" alt="Room"/></div>
            <div>
              <div className = "Room-Img2"><img src = "img/Room1-2.png" alt="Room"/></div>
              <div className = "Room-Img3"><img src = "img/Room1-3.png" alt="Room"/></div>
            </div>
          </div>
  			</div>
  			<div className = "Room-text">
  				<h2>Двухместный номер Rosa tree</h2>
  				<h3>Доступные удобства</h3>
  				<ul>
  					<li>
  						<p><img src = "img/Wifi.svg" alt="Wi-Fi"/>Wi-Fi</p>
  						<select name="wi-fi" size="1">
						    <option defaultValue="true">Присутствует</option>
						    <option value="false">Отсутствует</option>
					    </select>
  					</li>
  					<li>
  						<p><img src = "img/Food.svg" alt="Food"/>Питание</p>
  						<select name="wi-fi" size="1">
						    <option defaultValue="1">Только завтрак</option>
						    <option value="2">2-х разовое</option> 
						    <option  value="3">3-х разовое</option>
					    </select> 						
  					</li>
  					<li>
  						<p><img src = "img/Vine.svg" alt="Mini-Bar"/>Минибар</p>
  						<select name="wi-fi" size="1">
						    <option defaultValue="true">Присутствует</option>
						    <option value="false">Отсутствует</option>
					    </select>						
  					</li>
  				</ul>
  				<p>
  					В номерах все продумано до мелочей: современная техника, функциональность, уют и 
  					максимальный комфорт наполнят Ваше пребывание приятными моментами. <br/><br/>
  					Для нас очень важно, чтобы Ваш отдых был одним из приятных воспоминаний Вашей жизни. 
  					<br/>Бронируйте прямо сейчас!
  				</p>
  			</div>
  			<div className = "SelectionPanel">
  				<h3>На сколько суток вы хотите остаться?</h3>
          <div className = "flex">
            <ul>
              <li>
                <p><img src = "img/Wifi.svg" alt="Wi-Fi"/>Wi-Fi</p>
              </li>
              <li>
                <p><img src = "img/Food.svg" alt="Food"/>Питание</p>           
              </li>
              <li>
                <p><img src = "img/Vine.svg" alt="Mini-Bar"/>Минибар</p>            
              </li>
            </ul>
            <div className = "DaysChoice">
              <span>16</span>
              <img className = "test" src = "img/ChoseArrow.svg" alt = "up"/><br/>
              <img src = "img/ChoseArrow.svg" alt = "down"/>
              <hr/>
              <p><b>1 214p</b> за ночь</p>
            </div>
          </div>
          <hr/>
         <div className = "Sum-text">
            <p className = "Sum">19 424р</p>
            <p>Стоимость проживания</p>
          </div>
          <button>Забронировать</button>
  			</div>
  		</div>
	</div>

  );
};

export default RoomDetails;


