import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Avatars from '../common/Avatars';
import { BellOutlined, CalendarTwoTone } from '@ant-design/icons';
import { Space, Card } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';

import {
  toggleDisplayOwnedTopic,
  setTopicsList,
  getCurrentUser,
} from '../../state/actions/displayModalAction';

const RenderTopicsList = props => {
  const topicsList = useSelector(state => state.topicsList);
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const oktaAuth = useOktaAuth();
  const { authState } = oktaAuth;

  const getUser = async () => {
    const user = await oktaAuth.authService.getUser();
    return user;
  };

  if (!currentUser) {
    getUser()
      .then(res => {
        dispatch(getCurrentUser(res));
      })
      .catch(err => console.log(err));
  }

  const myCreatedTopicsURL = currentUser
    ? `${process.env.REACT_APP_API_URI}/profile/${currentUser.sub}/my-created-topics`
    : null;

  const getTopics = () => {
    axios
      .get(myCreatedTopicsURL, {
        headers: { Authorization: `Bearer ${authState.idToken}` },
      })
      .then(res => {
        console.log(res);
        dispatch(setTopicsList(res.data.topics));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const showDetails = id => {
    dispatch(toggleDisplayOwnedTopic(id));
  };

  useEffect(() => {
    if (currentUser) {
      getTopics();
    }
  }, [currentUser]);

  return (
    <>
      <div className="topics-list">
        <h2>Topics I Lead</h2>
        {topicsList.map(topic => (
          <Card
            onClick={() => showDetails(topic.id)}
            key={topic.id}
            hoverable={true}
            className="topic-card"
          >
            <h2>{topic.title}</h2>
            <h3>
              Owner: {`${currentUser.given_name} ${currentUser.family_name}`}
            </h3>
            <Avatars />
            <h3>
              <CalendarTwoTone />
              {topic.frequency}
            </h3>
            <h3>
              <BellOutlined />
            </h3>
          </Card>
        ))}
      </div>
    </>
  );
};

export default RenderTopicsList;

RenderTopicsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string,
      frequency: PropTypes.string, //should be daily, weekly, monthly, etc
      notifications: PropTypes.number,
    })
  ).isRequired,
};
