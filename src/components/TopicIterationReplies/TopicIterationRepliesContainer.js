import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import TopicIterationReplies from './TopicIterationReplies';
import TopicIterationRepliesQuestionForms from './TopicIterationRepliesQuestionForms';

function TopicIterationRepliesContainer(props) {
  const {
    currentRequestId,
    requestDetails,
    setRequestDetails,
    isTopicOwner,
  } = props;
  const [requestReplies, setRequestReplies] = useState(null);
  const [userHasReplied, setUserHasReplied] = useState(false);
  const [loading, setLoading] = useState(true);
  const { authService } = useOktaAuth();

  useEffect(() => {
    if (!requestDetails && !requestDetails.reply_statuses.length) {
      return;
    }

    if (isTopicOwner) {
      setLoading(false);
      return;
    }

    authService.getUser().then(userInfo => {
      const [{ has_replied }] = requestDetails.reply_statuses.filter(
        user => user.id === userInfo.sub
      );

      setUserHasReplied(has_replied);
      setLoading(false);
    });
  }, [authService, requestDetails, isTopicOwner]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {userHasReplied || isTopicOwner ? (
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
          setRequestDetails={setRequestDetails}
        />
      )}
    </div>
  );
}

export default TopicIterationRepliesContainer;
