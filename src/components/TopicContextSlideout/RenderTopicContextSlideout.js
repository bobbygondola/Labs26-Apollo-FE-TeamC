import React, { useState } from 'react';
import { Select } from 'antd';

const RenderTopicContextSlideout = props => {
  const { data } = props;
  const { Option } = Select;
  const [currentIteration, setCurrentIteration] = useState(
    data[data.length - 1]
  );

  function onChange(value) {
    console.log(`selected ${value}`);
    let tempInstance = data.filter(iteration => {
      return iteration.date === value;
    });
    setCurrentIteration(tempInstance[0]);
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
      <h1>{currentIteration.name}</h1>
      <Select
        showSearch
        style={{ width: '98%' }}
        placeholder={currentIteration.date}
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {data.map(iteration => {
          return (
            <Option key={iteration.instance_id} value={iteration.date}>
              {iteration.date}
            </Option>
          );
        })}
      </Select>
      <div>
        <h2>Members</h2>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {currentIteration.members.map(member => (
            <span>{`${member.name},  `}</span>
          ))}
        </div>
      </div>
      <div>
        {currentIteration.questions_with_context.map(q => {
          return (
            <div>
              <h3>{q.question}</h3>
              <p>{q.context}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RenderTopicContextSlideout;
