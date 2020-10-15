//packages
import React, { useEffect, useState } from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { useDispatch } from 'react-redux';

//files
import LoadingComponent from '../common/LoadingComponent';
import '../../styles/TopicDetails.css';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import {
  toggleNewRequestModal,
  getCurrentRequestId,
} from '../../state/actions/displayModalAction';

function TopicDetails(props) {
  const {
    currentTopicId,
    setRequestData,
    isTopicOwner,
    requestDetails,
    setRequestDetails,
  } = props;
  const { authState } = useOktaAuth();
  const dispatch = useDispatch();
  const [topicDetailsInfo, setTopicDetailsInfo] = useState(null);

  useEffect(() => {
    axiosWithAuth(authState)
      .get(`topics/${currentTopicId}`)
      .then(res => {
        setTopicDetailsInfo({
          ...res.data,
          topic_iteration_requests: res.data.topic_iteration_requests.reverse(),
        });
        setRequestData(processRequestData(res.data));

        if (res.data.topic_iteration_requests.length) {
          axiosWithAuth(authState)
            .get(`requests/${res.data.topic_iteration_requests[0].id}`)
            .then(res => {
              setRequestDetails(res.data);
              dispatch(getCurrentRequestId(res.data.id));
            });
        } else {
          setRequestDetails({});
        }
      })
      .catch(err => {
        alert(err);
      });
    // eslint-disable-next-line
  }, [currentTopicId]);

  const processRequestData = data => {
    return {
      context_responses: data.context_questions.map(question => {
        return {
          id: question.id,
          question: question.content,
          content: '',
        };
      }),
      topic_questions: data.default_questions,
    };
  };

  const handleRequestSelection = requestId => {
    dispatch(getCurrentRequestId(null));

    axiosWithAuth(authState)
      .get(`requests/${requestId}`)
      .then(res => {
        setRequestDetails(res.data);
        dispatch(getCurrentRequestId(requestId));
      });
  };

  const menu = (
    <Menu>
      {topicDetailsInfo &&
        topicDetailsInfo.topic_iteration_requests.map((request, i) => {
          const date = request.posted_at.split('T');
          const [year, month, day] = date[0].split('-');
          return (
            <Menu.Item
              key={request.posted_at + i}
              style={{ textAlign: 'center', fontSize: '15px' }}
              onClick={() => handleRequestSelection(request.id)}
            >
              {`${month}/${day}/${year}`}
            </Menu.Item>
          );
        })}
    </Menu>
  );

  // Conditional function so the dropdown shows selected request
  const selectedRequest = () => {
    if (requestDetails.posted_at) {
      const date = requestDetails.posted_at.split('T');
      const [year, month, day] = date[0].split('-');
      return `${month}/${day}/${year}`;
    } else {
      return 'No Requests';
    }
  };

  // Function to render the members details
  const renderMemberDetails = () => {
    return requestDetails.reply_statuses ? (
      <div className="memberCount">
        {requestDetails.reply_statuses
          .sort((a, b) => Number(b.has_replied) - Number(a.has_replied))
          .map(member => {
            return (
              <img
                key={member.id}
                style={!member.has_replied ? { opacity: '0.2' } : null}
                src={member.avatarUrl}
                alt="Member Avatar"
              />
            );
          })}
        <p id="count">
          {requestDetails.reply_statuses.reduce(
            (a, c) => (a += c.has_replied ? 1 : 0),
            0
          )}
          /{requestDetails.reply_statuses.length}
        </p>
      </div>
    ) : (
      topicDetailsInfo.members.map(member => {
        return (
          <img key={member.id} src={member.avatarUrl} alt="Member Avatar" />
        );
      })
    );
  };

  // Function to conditionally render context and responses if they exist
  const renderContextDetails = () => {
    return requestDetails.context_responses
      ? requestDetails.context_responses.map(
          ({ context_question, context_response }, i) => {
            return (
              <div key={context_question + i}>
                <p>
                  <strong> - {context_question}</strong>
                </p>
                <p>{context_response}</p>
              </div>
            );
          }
        )
      : topicDetailsInfo.context_questions.map((question, i) => {
          return (
            <div key={question.content + i}>
              <p>
                <strong> - {question.content}</strong>
              </p>
            </div>
          );
        });
  };

  return (
    <div className="topicDetails__container">
      {topicDetailsInfo ? (
        <div className="innerTopicDetails">
          <div className="titleAndRequest">
            <h2>{topicDetailsInfo.title}</h2>
            {isTopicOwner && (
              <Button
                type="primary"
                onClick={() => dispatch(toggleNewRequestModal())}
              >
                New Request
              </Button>
            )}
          </div>
          <Dropdown overlay={menu} className="dropDown">
            <Button onClick={e => e.preventDefault()}>
              {selectedRequest()}
            </Button>
          </Dropdown>
          <div className="avatars">{renderMemberDetails()}</div>
          <div className="joinCode">
            <h4>Join Code: {topicDetailsInfo.id}</h4>
          </div>
          <div>
            <h1>Context</h1>
            {renderContextDetails()}
          </div>
        </div>
      ) : (
        <LoadingComponent message="Loading..." />
      )}
    </div>
  );
}

export default TopicDetails;
