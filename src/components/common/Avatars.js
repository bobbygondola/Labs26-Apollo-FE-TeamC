import React from 'react';
import { Avatar, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';

const Avatars = props => {
  return (
    <div>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar
        style={{
          backgroundColor: '#ffc200',
        }}
      >
        K
      </Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{
            backgroundColor: '#00617e',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: '#ff4e2a',
        }}
        icon={<AntDesignOutlined />}
      />
    </div>
  );
};

export default Avatars;
