import { Layout, Avatar, Button, Space, Badge } from 'antd';
import { UserOutlined, PlusOutlined } from '@ant-design/icons';
const { Sider } = Layout;

const SubSidebar = () => {
  return (
    <Sider width={100} theme='light'>
      <Space
        direction='vertical'
        align='center'
        style={{
          justifyContent: 'space-between',
          height: '100%',
          width: '100%',
          padding: '40px 0 40px 0',
        }}
      >
        <Badge status='success' dot offset={[-10, 5]} style={{ padding: 5 }}>
          <Avatar size={{ lg: 45, xl: 50, xxl: 55 }} icon={<UserOutlined />} />
        </Badge>
        <Button type='primary' shape='circle' icon={<PlusOutlined />} size='large'></Button>
      </Space>
    </Sider>
  );
};

export default SubSidebar;
