//packages
import React, { useEffect, useState } from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { useOktaAuth } from '@okta/okta-react';

//files
import LoadingComponent from '../../components/common/LoadingComponent';
import '../../styles/TopicDetails.css';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function RenderTopicDetails(props) {
  const { currentTopicId } = props;
  const { authState } = useOktaAuth();
  const [topicDetailsInfo, setTopicDetailsInfo] = useState(null);

  useEffect(() => {
    axiosWithAuth(authState)
      .get(`topics/${currentTopicId}`)
      .then(res => {
        console.log(res);
        setTopicDetailsInfo(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [currentTopicId]);

  const menu = (
    <Menu>
      {topicDetailsInfo &&
        topicDetailsInfo.topic_iteration_requests.map(request => {
          return (
            <Menu.Item>
              <a>{request.posted_at}</a>
            </Menu.Item>
          );
        })}
    </Menu>
  );

  return (
    <div className="topicDetails__container">
      {topicDetailsInfo ? (
        <div className="innerTopicDetails">
          <h2>{topicDetailsInfo.title}</h2>
          <Dropdown overlay={menu}>
            <Button onClick={e => e.preventDefault()}>Select</Button>
          </Dropdown>
          <h2>Members: </h2>
          {topicDetailsInfo.members.map(member => {
            console.log(member);
            return <img src={member.avatarUrl} />;
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

export default RenderTopicDetails;
