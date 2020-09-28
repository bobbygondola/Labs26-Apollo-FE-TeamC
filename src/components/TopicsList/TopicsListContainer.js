import React from 'react';
import { List } from '../common';
import { getExampleData } from '../../api';

//files
import RenderTopicsList from './RenderTopicsList';
import RenderTopicDetails from '../TopicDetails/RenderTopicDetails';
import '../../styles/TopicsList.css';

const TopicsListContainer = () => {
  return (
    <div className="topicsList__container">
      <List
        //axios request goes here
        getItemsData={getExampleData}
        LoadingComponent={() => <div>Loading Topics...</div>}
        RenderItems={RenderTopicsList}
      />
      <RenderTopicDetails />
    </div>
  );
};

export default TopicsListContainer;
