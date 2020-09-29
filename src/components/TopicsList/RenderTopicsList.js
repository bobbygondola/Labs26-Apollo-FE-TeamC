import React, { useEffect, useState } from 'react';
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

const id = '00ulthapbErVUwVJy4x6';

const RenderTopicsList = props => {
  const topicsList = useSelector(state => state.topicsList);
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  // const [topicsList, setTopicsList] = useState([
  //   {
  //     id: 1,
  //     title: 'Labs 26 Team C',
  //     frequency: 'Daily', //should be daily, weekly, monthly, etc,
  //     members: ['member1', 'member2', 'member3', 'etc'],
  //     notifications: 5,
  //   },
  //   {
  //     id: 2,
  //     title: 'Weekly Status',
  //     frequency: 'Weekly', //should be daily, weekly, monthly, etc,
  //     members: ['member1', 'member2', 'member3', 'etc'],
  //     notifications: 2,
  //   },
  //   {
  //     id: 3,
  //     title: 'Project Feedback',
  //     frequency: 'Quarterly', //should be daily, weekly, monthly, etc,
  //     members: ['member1', 'member2', 'member3', 'etc'],
  //     notifications: 20,
  //   },
  // ]);

  const oktaAuth = useOktaAuth();
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
      .get(myCreatedTopicsURL)
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
    <Space align="start" direction="vertical" size="small">
      {topicsList.map(topic => (
        <Card
          onClick={() => showDetails(topic.id)}
          key={topic.id}
          bordered={true}
          hoverable={true}
          style={{ border: '1px solid #00617e', borderRadius: '5px' }}
        >
          <h2>{topic.title}</h2>
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
    </Space>
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
