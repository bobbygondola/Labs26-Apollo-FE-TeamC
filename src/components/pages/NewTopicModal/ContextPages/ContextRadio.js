import React, { useState } from 'react';
import { Radio } from 'antd';
import { defaultQuestions, radioButtons } from '../data';

function ContextRadio({ topic, setTopic }) {
  const [radioVal, setRadioVal] = useState(0);
  const radioCheck = e => {
    setRadioVal(e.target.value);
    setTopic({
      ...topic,
      default_questions: defaultQuestions[e.target.value],
    });
  };

  const radioStyle = {
    display: 'flex',
    height: '30px',
    lineHeight: '30px',
  };

  return (
    <>
      <h2 style={{ color: '#3389FF', marginTop: '20px' }}>Context</h2>
      <Radio.Group onChange={radioCheck} value={radioVal}>
        {radioButtons.map(button => (
          <Radio
            key={button.value}
            style={radioStyle}
            value={button.value}
            description={button.description}
          >
            {button.description}
          </Radio>
        ))}
      </Radio.Group>
    </>
  );
}

export default ContextRadio;
