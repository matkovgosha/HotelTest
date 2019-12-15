import React from 'react';

import './short-header.css';

import { Link } from 'react-router-dom';

const ShortHeader = () => {
  return(
	<div className="short-head">
		<div className="logo">
			<Link to = "/">
				 <img src = "../img/Logo.svg" alt="Logo"/><br/>
				 <p>Chikibambony</p>
			</Link>
		</div>
	</div>
  )
};


export default ShortHeader;