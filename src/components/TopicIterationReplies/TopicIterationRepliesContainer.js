import React, { useState } from 'react';

import TopicIterationReplies from './TopicIterationReplies';
import TopicIterationRepliesQuestionForms from './TopicIterationRepliesQuestionForms';

function TopicIterationRepliesContainer(props) {
  const [requestReplies, setRequestReplies] = useState(null);

  const { currentRequestId, requestDetails } = props;
  return (
    <div>
      <TopicIterationReplies
        currentRequestId={currentRequestId}
        requestDetails={requestDetails}
        requestReplies={requestReplies}
        setRequestReplies={setRequestReplies}
      />
      <TopicIterationRepliesQuestionForms requestDetails={requestDetails} />
    </div>
  );
}

export default TopicIterationRepliesContainer;
