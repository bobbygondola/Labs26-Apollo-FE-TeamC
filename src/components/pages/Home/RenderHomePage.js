// packages
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout } from 'antd';

// files
import '../../../styles/Home.css';
import TopicContextSlideoutContainer from '../../TopicContextSlideout/TopicContextSlideoutContainer';
import TopicsListContainer from '../../TopicsList/TopicsListContainer';

const { Content } = Layout;

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <Layout className="layout">
      <TopicContextSlideoutContainer />
      <TopicsListContainer />
    </Layout>
  );
}
export default RenderHomePage;
