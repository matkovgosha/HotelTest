import React, { Component } from 'react';
import RoomList from '../room-list';
import HotelHeader from '../hotel-header/hotel-header';
import HotelFooter from '../hotel-footer/hotel-footer';

import { Link } from 'react-router-dom';

import { AdminIn } from '../../actions';

import { connect } from 'react-redux';


class HomePage extends Component {

  render(){
    const {AdminIn} = this.props;

    return (
      <div>
        <HotelHeader />
        <Link to = "/admin">
          <button className = "CancelButton"
          onClick ={() => AdminIn()}>
          Admin</button>
        </Link>  
        
        <RoomList type = {'lux'} descr = "Номера люкс (5)" />
        <RoomList type = {'two'} descr = "Двухместные номера (5)" />
        <RoomList type = {'three'} descr = "Трехместные номера (5)" />
        <RoomList type = {'one'} descr = "Одноместные номера (5)" />
        <HotelFooter />
      </div>
    );
  }
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  AdminIn
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);