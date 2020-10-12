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
  const { currentTopicId, setRequestedData } = props;
  const { authState } = useOktaAuth();
  const dispatch = useDispatch();
  const [topicDetailsInfo, setTopicDetailsInfo] = useState(null);

  useEffect(() => {
    axiosWithAuth(authState)
      .get(`topics/${currentTopicId}`)
      .then(res => {
        setTopicDetailsInfo(res.data);
        setRequestedData({
          context_responses: res.data.context_questions.map(question => {
            return {
              id: question.id,
              question: question.content,
              content: '',
            };
          }),
          topic_questions: res.data.default_questions,
        });
      })
      .catch(err => {
        alert(err);
      });
  }, [currentTopicId]);

  const handleRequestSelection = requestId => {
    dispatch(getCurrentRequestId(requestId));
  };

  console.log('TOPICDETAILSINFO', topicDetailsInfo);

  const menu = (
    <Menu>
      {topicDetailsInfo &&
        topicDetailsInfo.topic_iteration_requests.map(request => {
          return (
            <Menu.Item onClick={() => handleRequestSelection(request.id)}>
              <span>Date: {request.posted_at}</span>
            </Menu.Item>
          );
        })}
    </Menu>
  );

  return (
    <div className="topicDetails__container">
      {topicDetailsInfo ? (
        <div className="innerTopicDetails">
          <div>
            <h2>{topicDetailsInfo.title}</h2>
            <Button
              type="primary"
              onClick={() => dispatch(toggleNewRequestModal())}
            >
              New Request
            </Button>
          </div>
          <Dropdown overlay={menu}>
            <Button onClick={e => e.preventDefault()}>Select</Button>
          </Dropdown>
          <h3>Members: </h3>
          {topicDetailsInfo.members.map(member => {
            return <img src={member.avatarUrl} alt="Member Avatar" />;
          })}

          <div>
            <h1>Context</h1>
            {topicDetailsInfo.context_questions.map(contextQuestion => {
              return <p key={contextQuestion.id}>{contextQuestion.content}</p>;
            })}
          </div>
        </div>
      ) : (
        <LoadingComponent message="Loading..." />
      )}
    </div>
  );
}

export default TopicDetails;
