import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';
import { roomCancel } from '../../actions';

import { withHotelstoreService } from '../hoc';
import { compose } from '../../utils';

import { connect } from 'react-redux';

class AdminListItem extends Component {

  render(){


  const {room, roomCancel} = this.props;

  const { id, title, listImage, BooksDays } = room;

  const newPath = "room/" + id;

  let date = new Date();
  date.setDate(date.getDate() + BooksDays);
  
  let month = ("0" + (date.getMonth()+1)).slice(-2);

    if(BooksDays === 0){
      return (
        <div className="item">
          <img src = {listImage} alt="Room"/>
          <p className ="room-name">{title}</p>
          <div className = "free-text">Свободно</div>
        </div>
      );
    }
    else{
      return (
         <div className="item">
          <img src = {listImage} alt="Room"/>
          <p className ="room-name">{title}</p>
          <div className = "book-text">Занято до {date.getDate()}.{month}  </div>
          <button id ="BookButton"
          onClick ={() => roomCancel(id)}>
          Отменить бронь</button>
        </div>
      );
    }      
  }
};


const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  roomCancel
};

//export default connect({}, mapDispatchToProps)(withRouter(AdminListItem));

export default compose(
  withHotelstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)((withRouter(AdminListItem)));