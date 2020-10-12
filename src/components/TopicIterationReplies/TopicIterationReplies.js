// packages
import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

// files
import LoadingComponent from '../../components/common/LoadingComponent';
import '../../styles/TopicIterationReplies.css';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function TopicIterationReplies(props) {
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

  return (
    <div className="topicIterationReplies__container">
      {props.currentRequestId ? (
        <>
          <h2>Replies</h2>
          {requestReplies &&
            requestReplies.request_replies.map(request => {
              console.log(request);
              return (
                <div className="innerRequestDetails">
                  <div className="userDetails">
                    <img alt="avatar" src={request.avatarUrl} />
                    <p>{request.name}</p>
                  </div>
                  <div className="answers">
                    {request.replies.map(replies => {
                      return (
                        <div className="answerContent">
                          <p id="repliesId">
                            {replies.question_id}. Question Title
                          </p>
                          <div className="questionAnswer">
                            <p>{replies.content}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </>
      ) : (
        <LoadingComponent message="Loading..." />
      )}
    </div>
  );
}

export default TopicIterationReplies;
