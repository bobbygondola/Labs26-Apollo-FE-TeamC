import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Avatars from '../common/Avatars';
import { BellOutlined, CalendarTwoTone } from '@ant-design/icons';
import { Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';

import {
  toggleDisplayOwnedTopic,
  setTopicsList,
} from '../../state/actions/displayModalAction';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const TopicsList = props => {
  const topicsList = useSelector(state => state.topicsList);
  const dispatch = useDispatch();
  const oktaAuth = useOktaAuth();
  const { authState } = oktaAuth;
  const [displayedTopicsList, setDisplayedTopicsList] = useState([]);

  const getTopics = () => {
    axiosWithAuth(authState)
      .get('/topics')
      .then(res => {
        dispatch(setTopicsList(res.data.myTopics));
        setDisplayedTopicsList(res.data.myTopics.joined);
      })
      .catch(err => {
        alert(err);
      });
  };

  const showDetails = id => {
    dispatch(toggleDisplayOwnedTopic(id));
  };

  useEffect(() => {
    getTopics();
  }, []);

  const displayTopicsICreated = e => {
    e.preventDefault();
    setDisplayedTopicsList(topicsList.created);
  };

  const displayTopicsIJoined = e => {
    e.preventDefault();
    setDisplayedTopicsList(topicsList.joined);
  };

  return (
    <>
      <div className="topics-list">
        <div className="topic-buttons">
          <Button onClick={displayTopicsICreated}>Topics I've Created</Button>
          <Button onClick={displayTopicsIJoined}>Topics I've Joined</Button>
        </div>
        {topicsList
          ? displayedTopicsList.map(topic => (
              <Card
                onClick={() =>
                  showDetails(topic.id ? topic.id : topic.topic_id)
                }
                key={topic.id}
                hoverable={true}
                className="topic-card"
              >
                <h2>{topic.title}</h2>
              </Card>
            ))
          : null}
      </div>
    </>
  );
};

export default TopicsList;

TopicsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string,
      frequency: PropTypes.string, //should be daily, weekly, monthly, etc
      notifications: PropTypes.number,
    })
  ).isRequired,
};
