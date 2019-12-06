
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

export {
  roomsLoaded,
  roomsRequested,
  roomsError
};
