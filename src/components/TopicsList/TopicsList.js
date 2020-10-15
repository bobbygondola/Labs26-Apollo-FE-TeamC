import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';

import {
  toggleDisplayOwnedTopic,
  setTopicsList,
  getCurrentRequestId,
} from '../../state/actions/displayModalAction';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const TopicsList = props => {
  const { isTopicOwner, setIsTopicOwner } = props;
  const topicsList = useSelector(state => state.topicsList);
  const dispatch = useDispatch();
  const oktaAuth = useOktaAuth();
  const { authState } = oktaAuth;
  const [displayedTopicsList, setDisplayedTopicsList] = useState([]);

  useEffect(() => {
    if (isTopicOwner) {
      setDisplayedTopicsList(topicsList.created);
    } else {
      setDisplayedTopicsList(topicsList.joined);
    }
  }, [isTopicOwner, topicsList]);

  useEffect(() => {
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

    getTopics();

    // eslint-disable-next-line
  }, []);

  const showDetails = id => {
    dispatch(toggleDisplayOwnedTopic(id));
    dispatch(getCurrentRequestId(null));
  };

  const toggleDisplayTopics = type => {
    if (isTopicOwner && type === 'joined') {
      setIsTopicOwner(false);
      dispatch(getCurrentRequestId(null));
      dispatch(toggleDisplayOwnedTopic(null));
    } else if (!isTopicOwner && type === 'created') {
      setIsTopicOwner(true);
      dispatch(getCurrentRequestId(null));
      dispatch(toggleDisplayOwnedTopic(null));
    }
  };

  return (
    <>
      <div className="topics-list">
        <div className="topic-buttons">
          <Button onClick={() => toggleDisplayTopics('created')}>
            Created
          </Button>
          <Button onClick={() => toggleDisplayTopics('joined')}>Joined</Button>
        </div>
        {topicsList
          ? displayedTopicsList.map((topic, idx) => (
              <div
                key={idx}
                onClick={() =>
                  showDetails(topic.id ? topic.id : topic.topic_id)
                }
                className="topic-card"
              >
                <h2>{topic.title.match(/\b(\w)/g).join('')}</h2>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default TopicsList;
