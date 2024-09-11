import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const menuItems = [
  { label: 'Home', key: '/', icon: <HomeOutlined /> },
  { label: 'Profile', key: '/profile', icon: <UserOutlined /> },
  { label: 'Settings', key: '/settings', icon: <SettingOutlined /> },
];

const MyMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState('/');

  // Update selected menu based on current path
  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  // Handle menu item click
  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
    navigate(e.key);
  };

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        style={{ height: '100%', borderRight: 0 }}
        onClick={handleMenuClick}
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default MyMenu;
