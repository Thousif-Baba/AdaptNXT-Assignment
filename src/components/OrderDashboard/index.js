import React from 'react';
import NavigationBar from '../NavigationBar/index.js';
import OrdersTab from '../OrdersTab/index.js';
import OrderTable from '../OrderTable/index.js';
import Sidebar from '../Sidebar/index.js';
import './index.css';

class OrderDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'pending',
      orders: [
        {
          channel: 'https://res.cloudinary.com/dnqgnmrup/image/upload/v1708336991/shopify_jii0xv.jpg',
          orderNo: '#TKN20203754',
          orderDate: '2022-05-04',
          city: 'Lucknow',
          customerName: 'Abhishek Dixit',
          orderValue: '0.00',
          status: 'Pending'
        },
        {
          channel: 'https://res.cloudinary.com/dnqgnmrup/image/upload/v1708336991/shopify_jii0xv.jpg',
          orderNo: '#TKN20203753',
          orderDate: '2022-05-04',
          city: 'Lucknow',
          customerName: 'Abhishek Dixit',
          orderValue: '0.00',
          status: 'Pending'
        },
        {
          channel: 'https://res.cloudinary.com/dnqgnmrup/image/upload/v1708336991/shopify_jii0xv.jpg',
          orderNo: '#TKN20203752',
          orderDate: '2022-05-04',
          city: 'Lucknow',
          customerName: 'Abhishek Dixit',
          orderValue: '0.00',
          status: 'Pending'
        },
      ]
    };
  }

  handleSelectTab = (tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab, orders } = this.state;
    return (
      <div className="order-dashboard">
        <NavigationBar />
        <div className='dashboard-content'>
          <Sidebar/>
          <div className='main-content'>
            <OrdersTab onSelectTab={this.handleSelectTab} selectedTab={selectedTab} />
            <OrderTable orders={orders.filter(order => order.status.toLowerCase() === selectedTab)} />
          </div>
        </div>
      </div>
    );
  }
}

export default OrderDashboard;
