import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Tooltip } from 'antd';
import {
  UserOutlined,
  AntDesignOutlined,
  BellOutlined,
} from '@ant-design/icons';

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
  <div>
    {/* // {props.data.map(topic => ( */}
    {topicsPlaceholder.map(topic => (
      <div key={topic.id}>
        <div>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar
            style={{
              backgroundColor: '#f56a00',
            }}
          >
            K
          </Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{
              backgroundColor: '#1890ff',
            }}
            icon={<AntDesignOutlined />}
          />
        </div>
        <h3>{topic.frequency}</h3>
        <h3>
          <BellOutlined />
          {topic.notifications}
        </h3>
      </div>
    ))}
  </div>
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
