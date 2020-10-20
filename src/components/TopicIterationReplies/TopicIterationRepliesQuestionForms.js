import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function TopicIterationRepliesQuestionForms(props) {
  const { authState } = useOktaAuth();
  const { requestDetails, setRequestDetails, setUserHasReplied } = props;
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
        setRequestDetails({
          ...requestDetails,
          reply_statuses: requestDetails.reply_statuses.map(user => {
            if (user.id === res.data[0].profile_id) {
              return { ...user, has_replied: true };
            }
            return user;
          }),
        });
        setUserHasReplied(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div style={{ marginLeft: '50px' }}>
      <h3>
        <strong style={{ color: '#3389FF', fontSize: '25px' }}>
          Questions
        </strong>
      </h3>
      {replies.map((question, i) => {
        return (
          <div key={question + i}>
            <h3 style={{ marginTop: '17px', fontWeight: 'bold' }}>
              {question.question}
            </h3>
            <textarea
              rows={3.5}
              cols={40}
              onChange={e => handleFormChange(e, question.question_id)}
              value={question.content}
            />
          </div>
        );
      })}
      <Button
        style={{
          backgroundColor: '#3389FF',
          color: 'white',
          marginTop: '10px',
        }}
        onClick={submitReplies}
      >
        Submit
      </Button>
    </div>
  );
}

export default TopicIterationRepliesQuestionForms;
