import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "tachyons";
import Clock from './Clock';
import Footer from './Footer';
import './index.css';



ReactDOM.render(
	<div> 
		<Clock />
		<Footer />
    </div>
  ,document.getElementById('root')
);