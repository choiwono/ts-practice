import * as React from 'react';
import Layout from '../../components/Layout';
import Sidebar, { SidebarTitle } from '../../components/Sidebar';
import Main from '../../components/Main';

const HomePage: React.FC = () => {
    return (
      <Layout>
        <Sidebar>
          <SidebarTitle>폴더</SidebarTitle>
          
        </Sidebar>
        <Main></Main>
      </Layout>
    );
}

export default HomePage;