import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';
import { useSelector } from 'react-redux';

import '../../../styles/Home.css';
import TopicContextSlideoutContainer from '../../TopicContextSlideout/TopicContextSlideoutContainer';
import RenderTopicDetails from '../../TopicDetails/RenderTopicDetails';

const { Header, Content } = Layout;

function RenderHomePage(props) {
  const displayOwnedTopic = useSelector(state => state.displayOwnedTopic);

  const { authService } = props;
  return (
    <Layout className="layout">
      <TopicContextSlideoutContainer />
      <RenderTopicDetails />
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
