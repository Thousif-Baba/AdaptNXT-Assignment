import React from 'react';
import './index.css';
import { IoMdClose } from "react-icons/io";


class OrdersTab extends React.Component {
  render() {
    const { onSelectTab, selectedTab } = this.props;
    return (
      <div>
        <div className='orders-section'>
          <p className='orders'>Orders</p>
          <IoMdClose/>
        </div>
        <div className="orders-tab">
          <button 
            className={selectedTab === 'pending' ? 'active' : ''} 
            onClick={() => onSelectTab('pending')}
          >
            Pending
          </button>
          <button 
            className={selectedTab === 'accepted' ? 'active' : ''} 
            onClick={() => onSelectTab('accepted')}
          >
            Accepted
          </button>
          <button 
            className={selectedTab === 'awbCreated' ? 'active' : ''} 
            onClick={() => onSelectTab('awbCreated')}
          >
            AWB Created
          </button>
          <button 
            className={selectedTab === 'ready' ? 'active' : ''} 
            onClick={() => onSelectTab('ready')}
          >
            Ready to Ship
          </button>
          <button 
            className={selectedTab === 'shipped' ? 'active' : ''} 
            onClick={() => onSelectTab('shipped')}
          >
            Shipped
          </button>
          <button 
            className={selectedTab === 'completed' ? 'active' : ''} 
            onClick={() => onSelectTab('completed')}
          >
            Completed
          </button>
          <button 
            className={selectedTab === 'cancelled' ? 'active' : ''} 
            onClick={() => onSelectTab('cancelled')}
          >
            Cancelled
          </button>
        </div>
      </div>
    );
  }
}

export default OrdersTab;
