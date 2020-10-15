import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//files
import TopicsList from './TopicsList';
import TopicDetails from '../TopicDetails/TopicDetails';
import TopicIterationRepliesContainer from '../TopicIterationReplies/TopicIterationRepliesContainer';
import '../../styles/TopicsList.css';
import NewRequestModal from '../TopicDetails/NewRequestModal';
import NewRequestSuccessModal from '../TopicDetails/RequestSuccessModal';

const TopicsListContainer = () => {
  const currentTopicId = useSelector(state => state.currentTopicId);
  const currentRequestId = useSelector(state => state.currentRequestId);
  const [requestData, setRequestData] = useState({
    context_responses: [],
    topic_questions: [],
  });
  const [isTopicOwner, setIsTopicOwner] = useState(false);

  return (
    <div className="topicsList__container">
      <TopicsList
        setIsTopicOwner={setIsTopicOwner}
        isTopicOwner={isTopicOwner}
      />
      {currentTopicId && (
        <TopicDetails
          currentTopicId={currentTopicId}
          setRequestData={setRequestData}
          isTopicOwner={isTopicOwner}
        />
      )}
      <NewRequestModal
        currentTopicId={currentTopicId}
        requestData={requestData}
        setRequestData={setRequestData}
      />
      {currentRequestId && (
        <TopicIterationRepliesContainer currentRequestId={currentRequestId} />
      )}
      <NewRequestSuccessModal />
    </div>
  );
};

export default TopicsListContainer;
