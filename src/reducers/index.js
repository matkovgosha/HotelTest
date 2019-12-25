import HotelstoreService from '../services/hotelstore-service';

//console.log(HotelstoreService.data);

const initialState = {
  rooms: HotelstoreService.data,
  loading: false,
  error: null,
  isAdmin: false
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ROOMS_REQUESTED':
      return {
        rooms: [],
        loading: true,
        error: null,
        isAdmin: false
      };

    case 'ROOMS_LOADED':
      return {
        rooms: action.payload,
        loading: false,
        error: null,
        isAdmin: false
      };

    case 'ROOMS_ERROR':
      return {
        rooms: [],
        loading: false,
        error: action.payload,
        isAdmin: false
      };

    case 'ROOM_BOOKED':
      const roomId = action.payload;
      const days = action.days;

      const ID = parseInt(roomId.itemId);

      const newRooms = state.rooms.map(function(item){
        if(item.id === ID){
          return {
            ...item,
            BooksDays:days
          }
        }else{
          return item
        }
      });

      return {
        loading: false,
        error: null,
        rooms: newRooms,
        isAdmin: state.isAdmin
      };

    case 'ROOM_CANCEL':
      const CNCroomId = action.payload;
      
      const CNCnewRooms = state.rooms.map(function(item){
        if(item.id === CNCroomId){
          return {
            ...item,
            BooksDays:0
          }
        }else{
          return item
        }
      });
      return {
        loading: false,
        error: null,
        rooms: CNCnewRooms,
        isAdmin: state.isAdmin
      };

    
    case 'ENTER_SANDMAN':
      return {
        ...state,
        isAdmin: true
      };
    case 'EXIT_SANDMAN':
      return {
        ...state,
        isAdmin: false
      };      

    default:
      return state;
  }
};

export default reducer;
