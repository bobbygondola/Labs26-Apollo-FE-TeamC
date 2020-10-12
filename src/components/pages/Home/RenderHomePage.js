// packages
import React from 'react';
import { Layout } from 'antd';

// files
import '../../../styles/Home.css';
import TopicsListContainer from '../../TopicsList/TopicsListContainer';

function RenderHomePage() {
  return (
    <Layout className="layout">
      <TopicsListContainer />
      {/* <TopicContextSlideoutContainer /> */}
    </Layout>
  );
}
export default RenderHomePage;
