import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';

import '../../../styles/Home.css';
import TopicContextSlideoutContainer from '../../TopicContextSlideout/TopicContextSlideoutContainer';
//
const { Header, Content } = Layout;

function RenderHomePage(props) {
  const { authService } = props;
  return (
    <Layout className="layout">
      <TopicContextSlideoutContainer />
      <Content>
        <p>
          <Link to="/profile-list">Profiles Example</Link>
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
        <p>
          <Link to="/topics-list">Topics List</Link>
        </p>
        <p>
          <Button type="primary" onClick={() => authService.logout()}>
            Logout
          </Button>
        </p>
      </Content>
    </Layout>
  );
}
export default RenderHomePage;
