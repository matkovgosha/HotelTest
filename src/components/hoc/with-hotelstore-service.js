import React from 'react';
import { HotelstoreServiceConsumer } from '../hotelstore-service-context';

const withHotelstoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <HotelstoreServiceConsumer>
        {
          (hotelstoreService) => {
            return (<Wrapped {...props}
                     hotelstoreService={hotelstoreService}/>);
          }
        }
      </HotelstoreServiceConsumer>
    );
  }
};

export default withHotelstoreService;
