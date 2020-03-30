import React, { Component } from 'react';
import { Menu } from 'antd';
import {
  PhoneOutlined,
  UnorderedListOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
  });
  
  };

  render() {
    return (
    <nav className="menuBar">
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
      <Menu.Item key="alipay">
      <Link to="/">Beranda</Link> 
        </Menu.Item>
      <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <UnorderedListOutlined />
              <Link to="/daftar">Daftar</Link> 
            </span>
          }
        >
          <Menu.ItemGroup title="Menu :">
            <Menu.Item key="a">Kelas</Menu.Item>
            <Menu.Item key="a">Registrasi</Menu.Item>
            <Menu.Item key="a">Kritik dan Saran</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="mail">
          <PhoneOutlined />
            <a href="https://twitter.com/NCTsmtown_127">Kontak </a>
        </Menu.Item>
        <Menu.Item key="app">
        <QuestionCircleOutlined />
          <a href="https://www.youtube.com/channel/UCG-coSVp89xFSWN4pbVL53w">Tentang</a>
        </Menu.Item>
      
      
      </Menu>
    </nav>
    );
  }
}

export default Navbar;