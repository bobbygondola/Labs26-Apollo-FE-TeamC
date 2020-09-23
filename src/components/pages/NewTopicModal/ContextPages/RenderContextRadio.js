import React, { useState } from 'react';
import { Radio } from 'antd';
import { questions } from '../ContextPages/RenderGroupQuestions';

export const radioButtons = [
  {
    value: 0,
    description: 'Product Leadership',
  },
  {
    value: 1,
    description: 'Delivery Management',
  },
  {
    value: 2,
    description: 'Design Leadership',
  },
  { value: 3, description: 'Project Management' },
  {
    value: 4,
    description: 'Engineering Leadership',
  },
];

function RenderContextRadio({ topic, setTopic }) {
  const [radioVal, setRadioVal] = useState(0);
  const radioCheck = e => {
    setRadioVal(e.target.value);
    setTopic({
      ...topic,
      default_questions: questions[e.target.value],
    });
  };

  const radioStyle = {
    display: 'flex',
    height: '30px',
    lineHeight: '30px',
  };

  return (
    <>
      <Radio.Group onChange={radioCheck} value={radioVal}>
        {radioButtons.map(button => (
          <Radio
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

export default RenderContextRadio;
