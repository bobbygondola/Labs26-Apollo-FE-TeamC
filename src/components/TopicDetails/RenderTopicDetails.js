//packages
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Dropdown, Menu, Button } from 'antd';

//files
import LoadingComponent from '../../components/common/LoadingComponent';
import '../../styles/TopicDetails.css';

function RenderTopicDetails(props) {
  const { currentTopicId } = props;
  //
  const url = `https://apollo-c-api.herokuapp.com/topics/${currentTopicId}`;

  const [topicDetailsInfo, setTopicDetailsInfo] = useState(null);

  useEffect(() => {
    axios.get(url).then(res => {
      console.log(res);
      setTopicDetailsInfo(res.data);
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
        <div>
          <h2>{topicDetailsInfo.title}</h2>
          <h2>Members: </h2>
          {topicDetailsInfo.members.map(member => (
            <span>{`${member.name}, `}</span>
          ))}
          <div>
            {topicDetailsInfo.context_questions.map(contextQuestion => {
              return <p key={contextQuestion.id}>{contextQuestion.content}</p>;
            })}
          </div>
          <Dropdown overlay={menu}>
            <Button onClick={e => e.preventDefault()}>Topic Iterations</Button>
          </Dropdown>
        </div>
      ) : (
        <LoadingComponent message="Loading..." />
      )}
    </div>
  );
}

export default RenderTopicDetails;
