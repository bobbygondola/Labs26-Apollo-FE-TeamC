// packages
import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useSelector } from 'react-redux';

// files
import LoadingComponent from '../../components/common/LoadingComponent';
import '../../styles/TopicIterationReplies.css';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function RenderTopicIterationReplies(props) {
  const { authState } = useOktaAuth();
  const [requestReplies, setRequestReplies] = useState(null);

  useEffect(() => {
    axiosWithAuth(authState)
      .get(`requests/${props.currentRequestId}/replies`)
      .then(res => {
        setRequestReplies(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props.currentRequestId]);

  console.log(requestReplies);

  return (
    <div className="topicIterationReplies__container">
      {props.currentRequestId ? (
        <>
          <h2>Replies</h2>
          {requestReplies &&
            requestReplies.request_replies.map(request => {
              return <p>{request.name}</p>;
            })}
        </>
      ) : (
        <LoadingComponent message="Loading..." />
      )}
    </div>
  );
}

export default RenderTopicIterationReplies;
