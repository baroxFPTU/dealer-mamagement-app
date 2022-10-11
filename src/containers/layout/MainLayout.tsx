import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import MainSidebar from '../../components/common/MainSidebar';
import SubSidebar from '../../components/common/SubSidebar';
import { IHasChildren } from '../../types/common';

interface IMainLayoutProps extends IHasChildren {}

const { Content } = Layout;

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <MainSidebar />
        <Layout>
          <Content>{children || <Outlet />}</Content>
        </Layout>
        <SubSidebar />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
