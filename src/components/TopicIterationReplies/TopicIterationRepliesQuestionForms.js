import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function TopicIterationRepliesQuestionForms(props) {
  const { authState } = useOktaAuth();
  const { requestDetails, setUserHasReplied } = props;
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    setReplies(
      requestDetails.topic_questions.map(question => {
        return {
          question_id: question.id,
          question: question.content,
          content: '',
        };
      })
    );
  }, [requestDetails]);

  const handleFormChange = (e, id) => {
    setReplies(
      replies.map(reply => {
        if (reply.question_id === id) {
          return {
            ...reply,
            content: e.target.value,
          };
        } else {
          return reply;
        }
      })
    );
  };

  const submitReplies = e => {
    const processedReplies = {
      replies: replies.map(reply => {
        return {
          question_id: reply.question_id,
          content: reply.content,
        };
      }),
    };

    axiosWithAuth(authState)
      .post(`/requests/${requestDetails.id}`, processedReplies)
      .then(res => {
        console.log(res);
        setUserHasReplied(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h3>Questions</h3>
      {replies.map((question, i) => {
        return (
          <div key={question + i}>
            <h3>{question.question}</h3>
            <textarea
              onChange={e => handleFormChange(e, question.question_id)}
              value={question.content}
            />
          </div>
        );
      })}
      <Button onClick={submitReplies}>Submit</Button>
    </div>
  );
}

export default TopicIterationRepliesQuestionForms;
