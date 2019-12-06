import React from 'react';
import RoomList from '../room-list';
import HotelHeader from '../hotel-header/hotel-header';
import HotelFooter from '../hotel-footer/hotel-footer';

const HomePage = () => {
  return (
    <div>
      <HotelHeader />
      <RoomList type = {'lux'} descr = "Номера люкс (5)" />
      <RoomList type = {'two'} descr = "Двухместные номера (25)" />
      <RoomList type = {'three'} descr = "Трехместные номера (5)" />
      <RoomList type = {'three'} descr = "Одноместные номера (15)" />
      <HotelFooter />
    </div>
  );
};

export default HomePage;
