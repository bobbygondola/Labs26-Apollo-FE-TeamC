import React from 'react';
import PropTypes from 'prop-types';
import Avatars from '../common/Avatars';
import { BellOutlined, CalendarTwoTone } from '@ant-design/icons';
import { Space, Card } from 'antd';

const topicsPlaceholder = [
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
];

const RenderTopicsList = props => (
  <Space align="start" direction="vertical" size="small">
    {/* // {props.data.map(topic => ( */}
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
          {topic.notifications}
        </h3>
      </Card>
    ))}
  </Space>
);

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
