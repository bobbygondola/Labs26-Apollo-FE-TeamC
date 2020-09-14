import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Divider, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';

const RenderTopicsList = props => {
  return (
    <div>
      {props.data.map(topic => (
        <figure key={topic.id}>
          <Avatar.Group>
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
          </Avatar.Group>
        </figure>
      ))}
    </div>
  );
};

export default RenderTopicsList;

RenderTopicsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string,
      frequency: PropTypes.string, //should be daily, weekly, monthly, etc
      thumbnailUrl: PropTypes.string,
    })
  ).isRequired,
};
