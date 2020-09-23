import React from 'react';
import { Radio } from 'antd';

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
  const radioCheck = e => {
    setTopic({
      ...topic,
      contextRadioVal: e.target.value,
      contextRadioDescription: e.target.description,
    });
  };

  const radioStyle = {
    display: 'flex',
    height: '30px',
    lineHeight: '30px',
  };

  return (
    <>
      <Radio.Group onChange={radioCheck} value={topic.contextRadioVal}>
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
