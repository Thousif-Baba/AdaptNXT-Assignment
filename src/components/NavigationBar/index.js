import React from 'react';
import './index.css';
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMoonOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";



class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navigation-bar">
        <div className='label-container'>
          <img className='shopping-image' src="https://res.cloudinary.com/dnqgnmrup/image/upload/v1708330235/sp_ai7hex.png" alt='shoppingImage'/>
          <AiOutlineMenuFold/> 
        </div>
       <div className='profile-container'>
          <IoMoonOutline/>
          <CiBellOn/>
          <img className='profile-image' src="https://res.cloudinary.com/dnqgnmrup/image/upload/v1708330807/profile_xtnvzk.jpg" alt="profile"/>
       </div>
      </div>
    );
  }
}

export default NavigationBar;
