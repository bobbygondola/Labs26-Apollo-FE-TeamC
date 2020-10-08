import React from 'react';
import { List } from '../common';
import { getExampleData } from '../../api';
import { useSelector } from 'react-redux';

//files
import RenderTopicsList from './RenderTopicsList';
import RenderTopicDetails from '../TopicDetails/RenderTopicDetails';
import RenderTopicIterationReplies from '../TopicIterationReplies/RenderTopicIterationReplies';
import '../../styles/TopicsList.css';
import { getCurrentRequestId } from '../../state/actions/displayModalAction';

const TopicsListContainer = () => {
  const currentTopicId = useSelector(state => state.currentTopicId);
  const currentRequestId = useSelector(state => state.currentRequestId);
  return (
    <div className="topicsList__container">
      <List
        //axios request goes here
        getItemsData={getExampleData}
        LoadingComponent={() => <div>Loading Topics...</div>}
        RenderItems={RenderTopicsList}
      />
      {currentTopicId && <RenderTopicDetails currentTopicId={currentTopicId} />}
      {currentRequestId && (
        <RenderTopicIterationReplies currentRequestId={currentRequestId} />
      )}
    </div>
  );
};

export default TopicsListContainer;
