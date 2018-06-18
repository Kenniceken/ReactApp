import React from 'react';
import './OutputStyle.css';

const useroutput = (props) => {
  // Code for the UserOutput Component
  return (
    <div className="OutputStyle">
      <p>"<b>{props.username}</b> Please enter your username here before you can access our services. <b>{props.username}</b> Please enter your username here before you can access our services.<b>{props.username}</b> Please enter your username here before you can access our services."</p>
      </div>
  )
};


export default useroutput;
