import React, { useState } from 'react';
import { List } from '../common';
import { getExampleData } from '../../api';
import { useSelector } from 'react-redux';

//files
import TopicsList from './TopicsList';
import TopicDetails from '../TopicDetails/TopicDetails';
import TopicIterationReplies from '../TopicIterationReplies/TopicIterationReplies';
import '../../styles/TopicsList.css';
// import { getCurrentRequestId } from '../../state/actions/displayModalAction';
import NewRequestModal from '../TopicDetails/NewRequestModal';
import NewRequestSuccessModal from '../TopicDetails/RequestSuccessModal';

const TopicsListContainer = () => {
  const currentTopicId = useSelector(state => state.currentTopicId);
  const currentRequestId = useSelector(state => state.currentRequestId);
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
        RenderItems={TopicsList}
      />
      {currentTopicId && (
        <TopicDetails
          currentTopicId={currentTopicId}
          setRequestedData={setRequestedData}
        />
      )}
      <NewRequestModal
        currentTopicId={currentTopicId}
        requestedData={requestedData}
        setRequestedData={setRequestedData}
      />
      {currentRequestId && (
        <TopicIterationReplies currentRequestId={currentRequestId} />
      )}
      <NewRequestSuccessModal />
    </div>
  );
};

export default TopicsListContainer;
