import React, { useState } from 'react';
import { Select } from 'antd';

const RenderTopicContextSlideout = props => {
  const { data } = props;
  const { Option } = Select;
  const [currentIteration, setCurrentIteration] = useState(
    data.topic_iteration_requests[data.topic_iteration_requests.length - 1]
  );

  function onChange(value) {
    const [tempInstance] = data.topic_iteration_requests.filter(iteration => {
      return iteration.posted_at === value;
    });
    setCurrentIteration(tempInstance);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
      <h1>{data.title}</h1>
      <Select
        showSearch
        style={{ width: '98%' }}
        placeholder={currentIteration.posted_at}
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {data.topic_iteration_requests.map(iteration => {
          return (
            <Option key={iteration.id} value={iteration.posted_at}>
              {iteration.posted_at}
            </Option>
          );
        })}
      </Select>
      <div>
        <h2>Members</h2>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {data.members.map(member => (
            <span key={member.id}>{`${member.name},  `}</span>
          ))}
        </div>
      </div>
      <div>
        <h2>Context</h2>
        {data.context_questions.map(q => {
          return (
            <div>
              <h3>{q.content}</h3>
              <p>{q.response_type}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RenderTopicContextSlideout;
