import React from 'react';

import { Link } from 'react-router-dom';

const HotelHeader = () => {
  return(
	<div className="head">
		<div className="main-text">Путешествуй <br/>с комфортом</div>
		<div className="logo">
		  <Link to = "/">
		  	<img src = "img/Logo.svg" alt="Logo"/><br/>
		  	<p>Chikibambony</p>
		  </Link>
		</div>
	</div>
  )
};

export default HotelHeader;
