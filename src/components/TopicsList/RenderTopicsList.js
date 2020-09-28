import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Avatars from '../common/Avatars';
import { BellOutlined, CalendarTwoTone } from '@ant-design/icons';
import { Space, Card } from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const id = '00ulthapbErVUwVJy4x6';

const RenderTopicsList = props => {
  const displayOwnedTopic = useSelector(state => state.displayOwnedTopic);
  const dispatch = useDispatch();
  const [topicsPlaceholder, setTopicsPlaceholder] = useState([
    {
      id: 1,
      title: 'Labs 26 Team C',
      frequency: 'Daily', //should be daily, weekly, monthly, etc,
      members: ['member1', 'member2', 'member3', 'etc'],
      notifications: 5,
    },
    {
      id: 2,
      title: 'Weekly Status',
      frequency: 'Weekly', //should be daily, weekly, monthly, etc,
      members: ['member1', 'member2', 'member3', 'etc'],
      notifications: 2,
    },
    {
      id: 3,
      title: 'Project Feedback',
      frequency: 'Quarterly', //should be daily, weekly, monthly, etc,
      members: ['member1', 'member2', 'member3', 'etc'],
      notifications: 20,
    },
  ]);

  const myCreatedTopicsURL = `https://apollo-c-api.herokuapp.com/profile/${id}/my-created-topics`;

  const getTopics = () => {
    axios.get(myCreatedTopicsURL).then(res => {
      console.log(res);
      setTopicsPlaceholder(res.data.topics);
    });
  };

  useEffect(() => {
    getTopics();
  }, []);
  return (
    <Space align="start" direction="vertical" size="small">
      {topicsPlaceholder.map(topic => (
        <Card
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
