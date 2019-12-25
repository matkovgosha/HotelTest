import React, { Component } from 'react';
import AdminList from '../admin-list';
import HotelHeader from '../hotel-header/hotel-header';
import HotelFooter from '../hotel-footer/hotel-footer';

import { Redirect } from 'react-router-dom';

import { Link } from 'react-router-dom';

import { AdminOut } from '../../actions';

import { connect } from 'react-redux';


class AdminPage extends Component {



  render(){
    const {AdminOut, isAdmin} = this.props;
    if(isAdmin){
      return (
        <div>
          <HotelHeader />
          <Link to = "/">
            <button className = "CancelButton"
            onClick ={() => AdminOut()}>
            Выйти</button>
          </Link>
          <AdminList type = {'lux'} descr = "Номера люкс (5)" />
          <AdminList type = {'two'} descr = "Двухместные номера (5)" />
          <AdminList type = {'three'} descr = "Трехместные номера (5)" />
          <AdminList type = {'one'} descr = "Одноместные номера (5)" />
          <HotelFooter />
        </div>
      );      
    } else{
      return(
        <Redirect to = "/" />
      );
    }
  }
};

const mapStateToProps = ({isAdmin}) => {
  return {isAdmin};
};

const mapDispatchToProps = {
  AdminOut
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);