import React from 'react';

import TopicIterationReplies from './TopicIterationReplies';

function TopicIterationRepliesContainer(props) {
  const { currentRequestId } = props;
  return (
    <div>
      <TopicIterationReplies currentRequestId={currentRequestId} />
    </div>
  );
}

export default TopicIterationRepliesContainer;
