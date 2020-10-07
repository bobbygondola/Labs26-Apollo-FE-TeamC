import React, { useState } from 'react';
import { List } from '../common';
import { getExampleData } from '../../api';
import { useSelector } from 'react-redux';

//files
import RenderTopicsList from './RenderTopicsList';
import RenderTopicDetails from '../TopicDetails/RenderTopicDetails';
import RenderTopicIterationReplies from '../TopicIterationReplies/RenderTopicIterationReplies';
import '../../styles/TopicsList.css';
import RenderNewRequestModal from '../TopicDetails/RenderNewRequestModal';

const TopicsListContainer = () => {
  const currentTopicId = useSelector(state => state.currentTopicId);
  const [requestedData, setRequestedData] = useState({
    context_responses: [],
    topic_questions: [],
  });

  return (
    <div className="topicsList__container">
      <List
        //axios request goes here
        getItemsData={getExampleData}
        LoadingComponent={() => <div>Loading Topics...</div>}
        RenderItems={RenderTopicsList}
      />
      {currentTopicId && (
        <RenderTopicDetails
          currentTopicId={currentTopicId}
          setRequestedData={setRequestedData}
        />
      )}
      <RenderTopicIterationReplies currentTopicId={currentTopicId} />
      <RenderNewRequestModal requestedData={requestedData} />
    </div>
  );
};

export default TopicsListContainer;
