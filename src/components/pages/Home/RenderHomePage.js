import React from 'react';
import { Layout } from 'antd';
import '../../../styles/Home.css';
import TopicsListContainer from '../../TopicsList/TopicsListContainer';

function RenderHomePage() {
  return (
    <Layout className="layout">
      <TopicsListContainer />
    </Layout>
  );
}
export default RenderHomePage;
