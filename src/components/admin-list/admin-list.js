import React, { Component } from 'react';
import AdminListItem from '../admin-list-item';
 import { connect } from 'react-redux';

 import { withHotelstoreService } from '../hoc';
 import { roomsLoaded, roomsRequested, roomsError } from '../../actions';
 import { compose } from '../../utils';

 import Spinner from '../spinner';
 import ErrorIndicator from '../error-indicator';

class AdminList extends Component {

  componentDidMount() {
    const {
      hotelstoreService,
      roomsLoaded,
      roomsRequested,
      roomsError,
      rooms,
      } = this.props;

    if(rooms.length === 0){                         //не нужно
      roomsRequested();
        hotelstoreService.getRooms()
      .then((data) => roomsLoaded(data))
      .catch((err) => roomsError(err));
    }
  }


  render() {
    const { rooms, loading, error, descr, type } = this.props;
    let selectedRooms = [];
    selectedRooms = rooms.filter((room) => {
      return (room.type === type)
    })

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
         <div className="wrapper">
           <div className="rooms">
              <p className = "rooms-text">{descr}</p>
              <div className="items">
                {
                  selectedRooms.map((room) => {
                      return (
                         <AdminListItem key={room.id} room={room}/>
                      )
                  })
                }
              </div>
            </div>
          </div>
    );  
  }
}

const mapStateToProps = ({ rooms, loading, error }) => {
  return { rooms, loading, error };
};

const mapDispatchToProps = {
  roomsLoaded,
  roomsRequested,
  roomsError
};

export default compose(
  withHotelstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(AdminList);