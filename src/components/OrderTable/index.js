import React from 'react';
import './index.css';
import { IoIosArrowDown } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";
import { FiPlus } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa6";
import { LiaFileImportSolid } from "react-icons/lia";
import { BiRightArrow } from "react-icons/bi";
import { IoPrintOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";


class OrderTable extends React.Component {
  render() {
    const { orders } = this.props;
    return (
      <div className='table-container'>
        <div className='button-container'>
          <div>
            <button className='functional-button active-function-button'><LiaFileImportSolid/> Import Orders</button>
            <button className='functional-button inactive-function-button'><BiRightArrow/> Accept</button>
            <button className='functional-button inactive-function-button'><IoPrintOutline/> Print <IoIosArrowDown/></button>
          </div>
          <button className='refresh-button'><LuRefreshCcw/> Refresh</button>
        </div>
        <table className="order-table">
          <thead>
            <tr>
              <th>Channel<TiArrowUnsorted className='icon-style'/><FaFilter className='icon-style'/></th>
              <th>Order No<TiArrowUnsorted className='icon-style'/><CiSearch className='icon-style'/></th>
              <th>Order Date<TiArrowUnsorted className='icon-style'/><CiSearch className='icon-style'/></th>
              <th>City<TiArrowUnsorted className='icon-style'/></th>
              <th>Customer Name <CiSearch className='icon-style'/></th>
              <th>Order Value<TiArrowUnsorted className='icon-style'/></th>
              <th>Status<TiArrowUnsorted className='icon-style'/></th>
              <th>Operation<TiArrowUnsorted className='icon-style'/></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr className='rows-data' key={order.orderNo}>
                <td className='channel-container'>
                  <FiPlus/>
                  <input type='checkbox'/>
                  <img className='shopping-image' src={order.channel} alt="shopping"/>
                </td>
                <td className='order-number'>{order.orderNo}</td>
                <td>{order.orderDate}</td>
                <td>{order.city}</td>
                <td>{order.customerName}</td>
                <td>{order.orderValue}</td>
                <td><button className='status'>{order.status}</button></td>
                <td>
                  <button className='actions-button'>Actions<IoIosArrowDown/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='page-details-container'>
          <div className='arrows'><MdKeyboardArrowLeft/></div>
          <div className='page-number'>1</div>
          <div className='arrows'><MdKeyboardArrowRight/></div>
          <div className='total-pages'>20 / page <IoIosArrowDown/></div>
        </div>
      </div>
    );
  }
}

export default OrderTable;
