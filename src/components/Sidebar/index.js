import React from 'react';
import './index.css';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { GoListUnordered } from "react-icons/go";
import { LiaShippingFastSolid } from "react-icons/lia";
import { SiMoleculer } from "react-icons/si";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item"><AiOutlineDashboard/> Dashboard</div>
      <div className="sidebar-item"><IoPricetagOutline/> Inventory</div>
      <div className="sidebar-item active"><GoListUnordered/> Orders</div>
      <div className="sidebar-item"><LiaShippingFastSolid/> Shipping</div>
      <div className="sidebar-item"><SiMoleculer/> Channel</div>
    </div>
  );
}

export default Sidebar;
