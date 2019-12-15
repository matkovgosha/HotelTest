import React from 'react';

import ShortHeader from '../short-header';
import RoomDetails from '../room-details';

const RoomPage = (itemId) => {
	
  return(
  	<div>
	  	<ShortHeader />
	  	<RoomDetails itemId = {itemId}/>
  	</div>
  );
};

export default RoomPage;
