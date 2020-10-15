import React, { useState } from 'react';

import TopicIterationReplies from './TopicIterationReplies';
import TopicIterationRepliesQuestionForms from './TopicIterationRepliesQuestionForms';

function TopicIterationRepliesContainer(props) {
  const [requestReplies, setRequestReplies] = useState(null);
  const [userHasReplied, setUserHasReplied] = useState(false);

  const { currentRequestId, requestDetails } = props;
  return (
    <div>
      {userHasReplied ? (
        <TopicIterationReplies
          currentRequestId={currentRequestId}
          requestDetails={requestDetails}
          requestReplies={requestReplies}
          setRequestReplies={setRequestReplies}
        />
      ) : (
        <TopicIterationRepliesQuestionForms
          setUserHasReplied={setUserHasReplied}
          requestDetails={requestDetails}
        />
      )}
    </div>
  );
}

export default TopicIterationRepliesContainer;
