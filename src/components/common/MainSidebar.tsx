import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { DashboardOutlined, UserOutlined, AppstoreOutlined } from '@ant-design/icons';

const { useState } = React;
const { Sider } = Layout;
const { Title } = Typography;

const items = [
  { label: 'Dashboard', key: 'dashboard', icon: <DashboardOutlined /> }, // remember to pass the key prop
  { label: 'All users', key: 'all-users', icon: <UserOutlined /> }, // which is required
  {
    label: 'sub menu',
    key: 'submenu',
    icon: <AppstoreOutlined />,
    children: [{ label: 'item 3', key: 'submenu-item-1' }],
  },
];

const MainSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={300}
      theme='light'
    >
      <div className='logo'>
        {!collapsed && (
          <Title level={3} style={{ margin: '40px 16px 16px ' }}>
            Dealer Management
          </Title>
        )}
        {collapsed && (
          <Title level={3} style={{ margin: '40px 16px 16px ', textAlign: 'center' }}>
            D
          </Title>
        )}
      </div>
      <Menu mode='inline' items={items} />;
    </Sider>
  );
};

export default MainSidebar;
