import React from 'react';
import { List } from '../common';
import { getExampleData } from '../../api';
import { useSelector } from 'react-redux';

//files
import RenderTopicsList from './RenderTopicsList';
import RenderTopicDetails from '../TopicDetails/RenderTopicDetails';
import '../../styles/TopicsList.css';

const TopicsListContainer = () => {
  const currentTopicId = useSelector(state => state.currentTopicId);
  return (
    <div className="topicsList__container">
      <List
        //axios request goes here
        getItemsData={getExampleData}
        LoadingComponent={() => <div>Loading Topics...</div>}
        RenderItems={RenderTopicsList}
      />
      {currentTopicId && <RenderTopicDetails id={currentTopicId} />}
    </div>
  );
};

export default TopicsListContainer;
