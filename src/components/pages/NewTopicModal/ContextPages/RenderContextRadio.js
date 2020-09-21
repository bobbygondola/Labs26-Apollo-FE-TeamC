import React from 'react';
import { Radio } from 'antd';

const radioButtons = [
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
      title: e.target.description,
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
        <Radio
          style={radioStyle}
          value={radioButtons[0].value}
          description={radioButtons[0].description}
        >
          {radioButtons[0].description}
        </Radio>
        <Radio
          style={radioStyle}
          value={radioButtons[1].value}
          description={radioButtons[1].description}
        >
          {radioButtons[1].description}
        </Radio>
        <Radio
          style={radioStyle}
          value={radioButtons[2].value}
          description={radioButtons[2].description}
        >
          {radioButtons[2].description}
        </Radio>
        <Radio
          style={radioStyle}
          value={radioButtons[3].value}
          description={radioButtons[3].description}
        >
          {radioButtons[3].description}
        </Radio>
        <Radio
          style={radioStyle}
          value={radioButtons[4].value}
          description={radioButtons[4].description}
        >
          {radioButtons[4].description}
        </Radio>
      </Radio.Group>
    </>
  );
}

export default RenderContextRadio;
