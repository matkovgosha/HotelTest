import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { withHotelstoreService } from '../hoc';
import { compose } from '../../utils';
import { connect } from 'react-redux';

import './room-details.css';

class RoomDetails extends Component {


  state = {
    SumPrice: 0,
    DaysToBook: 0
  }

  componentDidMount() {

    const {hotelstoreService, itemId} = this.props;
    const {price} = hotelstoreService.getRoom(parseInt(itemId.itemId));
    //const { SumPrice, DaysToBook } = this.state;

    this.setState({
      StartPrice: price,
      Price: price,
      SumPrice: 0
    })
  }

  PriceChange(){ //Убрать костыли
    let k1 = (document.getElementById('select1').value === 'true') ? 100 : 0;
    let k2 = (document.getElementById('select2').value === 'true') ? 100 : 0;
    let k3 = (document.getElementById('select3').value === 'true') ? 100 : 0;

    this.setState({
      Price: this.state.StartPrice + k1 + k2 + k3 
    })
  }

  AddDay(){
    this.setState({
      SumPrice: this.state.SumPrice + this.state.Price,
      DaysToBook: this.state.DaysToBook + 1 
    })
  }

  RemoveDay(){
    if(this.state.DaysToBook>0){
      this.setState({
        SumPrice: this.state.SumPrice - this.state.Price,
        DaysToBook: this.state.DaysToBook - 1 
      })
    }
  }

  render() {

  const {hotelstoreService, itemId} = this.props;  //удалить, добавить this

  const { title,coverImage} = hotelstoreService.getRoom(parseInt(itemId.itemId)); //это удалить и добавить в return this, coverImage не грузится

//Поправить смазанную картинку
  return(
  	<div className = "Room-Wrapper">
  		<Link to="/">
      <div className = "BackButton"> <span>&lt;</span>Назад</div>
      </Link>
  		<div className = "Main-Info">
  			<div className = "img">
  				<img src = {coverImage} alt="Room"/>       
          <div className = "Short-img">
            <div className = "Room-Img1"><img src = "../img/Room1-1.png" alt="Room"/></div>
            <div>
              <div className = "Room-Img2"><img src = "../img/Room1-2.png" alt="Room"/></div>
              <div className = "Room-Img3"><img src = "../img/Room1-3.png" alt="Room"/></div>
            </div>
          </div>
  			</div>
  			<div className = "Room-text">
  				<h2>Номер {title}</h2>
  				<h3>Доступные удобства</h3>
  				<ul>
  					<li>
  						<p><img src = "../img/Wifi.svg" alt="Wi-Fi"/>Wi-Fi</p>
  						<select id = "select1" name="wi-fi" size="1"
                onChange={() => this.PriceChange()}>
						    <option value="false">Отсутствует</option>
                <option value="true">Присутствует</option>
					    </select>
  					</li>
  					<li>
  						<p><img src = "../img/Food.svg" alt="Food"/>Питание</p>
  						<select id = "select2" name="wi-fi" size="1" 
                onChange={() => this.PriceChange()}>
                <option value="false">Отсутствует</option>
                <option value="true">Присутствует</option> 
					    </select> 						
  					</li>
  					<li>
  						<p><img src = "../img/Vine.svg" alt="Mini-Bar"/>Минибар</p>
  						<select id = "select3" name="wi-fi" size="1"
                onChange={() => this.PriceChange()}>
						    <option value="false">Отсутствует</option>
                <option value="true">Присутствует</option>
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
                <p><img src = "../img/Wifi.svg" alt="Wi-Fi"/>Wi-Fi</p>
              </li>
              <li>
                <p><img src = "../img/Food.svg" alt="Food"/>Питание</p>           
              </li>
              <li>
                <p><img src = "../img/Vine.svg" alt="Mini-Bar"/>Минибар</p>            
              </li>
            </ul>
            <div className = "DaysChoice">
              <span>{this.state.DaysToBook}</span>
              <img className = "test" src = "../img/ChoseArrow.svg" alt = "up"
                onClick={() => this.AddDay()}/><br/>
              <img src = "../img/ChoseArrow.svg" alt = "down"
                onClick={() => this.RemoveDay()}/>
              <hr/>
              <p><b>{this.state.Price}</b> за ночь</p>
            </div>
          </div>
          <hr/>
         <div className = "Sum-text">
            <p className = "Sum">{this.state.SumPrice}  &#36;</p>
            <p>Стоимость проживания</p>
          </div>
          <button>Забронировать</button>
  			</div>
  		</div>
	  </div>
  );
 }
}


const mapStateToProps = ({ error }) => {
  return { error };
};


const mapDispatchToProps = {

};

export default compose(
  withHotelstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(RoomDetails);
