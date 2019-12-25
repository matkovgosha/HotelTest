
const roomsLoaded = (newRooms) => {
  return {
    type: 'ROOMS_LOADED',
    payload: newRooms
  };
};

const roomsRequested = () => {
  return {
    type: 'ROOMS_REQUESTED'
  }
};

const roomsError = (error) => {
  return {
    type: 'ROOMS_ERROR',
    payload: error
  };
};

const roomBook = (roomId,days) => {
  return {
    type: 'ROOM_BOOKED',
    payload: roomId,
    days: days
  };
};

const roomCancel = (roomId) => {
  return {
    type: 'ROOM_CANCEL',
    payload: roomId
  };
};

const AdminIn = () => {
  return {
    type: 'ENTER_SANDMAN'
  }
};

const AdminOut = () => {
  return {
    type: 'EXIT_SANDMAN'
  }
};


export {
  roomsLoaded,
  roomsRequested,
  roomsError,
  roomBook,
  AdminIn,
  AdminOut,
  roomCancel
};
