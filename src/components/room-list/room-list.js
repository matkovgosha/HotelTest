import React, { Component } from 'react';
import RoomListItem from '../room-list-item';
 import { connect } from 'react-redux';

 import { withHotelstoreService } from '../hoc';
 import { roomsLoaded, roomsRequested, roomsError } from '../../actions';
 import { compose } from '../../utils';

 import Spinner from '../spinner';
 import ErrorIndicator from '../error-indicator';

class RoomList extends Component {

  componentDidMount() {
    const {
      hotelstoreService,
      roomsLoaded,
      roomsRequested,
      roomsError,
      } = this.props;

    roomsRequested();
    hotelstoreService.getRooms()
      .then((data) => roomsLoaded(data))
      .catch((err) => roomsError(err));
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
                       <RoomListItem key={room.id} room={room}/>
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
)(RoomList);