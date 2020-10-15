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
  const [requestDetails, setRequestDetails] = useState({});

  return (
    <div className="topicsList__container">
      <TopicsList
        setIsTopicOwner={setIsTopicOwner}
        isTopicOwner={isTopicOwner}
      />
      {currentTopicId && (
        <TopicDetails
          requestDetails={requestDetails}
          setRequestDetails={setRequestDetails}
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
        <TopicIterationRepliesContainer
          currentRequestId={currentRequestId}
          requestDetails={requestDetails}
        />
      )}
      <NewRequestSuccessModal />
    </div>
  );
};

export default TopicsListContainer;
