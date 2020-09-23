import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';

const { Header, Content } = Layout;

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <Layout className="layout">
      <h1>Hi {userInfo.name} Welcome to Labs Basic SPA</h1>
      <Content>
        <p>
          This is an example of a common example of how we'd like for you to
          approach components.
        </p>

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
