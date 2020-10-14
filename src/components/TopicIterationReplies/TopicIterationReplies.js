import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
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
            requestReplies.request_replies.map((request, i) => {
              return (
                <div key={request.name + i} className="innerRequestDetails">
                  <div className="userDetails">
                    <img alt="avatar" src={request.avatarUrl} />
                    <p>{request.name}</p>
                  </div>
                  <div className="answers">
                    {request.replies.map((reply, i) => {
                      return (
                        <div key={reply.content + 1} className="answerContent">
                          <p id="repliesId">
                            {reply.question_id}. {reply.question}
                          </p>
                          <div className="questionAnswer">
                            <p>{reply.content}</p>
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
