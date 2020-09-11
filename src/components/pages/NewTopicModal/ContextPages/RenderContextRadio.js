import React, { useState } from 'react';
import { Radio } from 'antd';

function RenderContextRadio(props) {
  const [radioVal, setRadioVal] = useState(1);

  const radioCheck = e => {
    setRadioVal(e.target.value);
  };

  const radioStyle = {
    display: 'flex',
    height: '30px',
    lineHeight: '30px',
  };

  return (
    <>
      <Radio.Group onChange={radioCheck} value={radioVal}>
        <Radio style={radioStyle} value={1}>
          Product Leadership
        </Radio>
        <Radio style={radioStyle} value={2}>
          Delivery Management
        </Radio>
        <Radio style={radioStyle} value={3}>
          Design Leadership
        </Radio>
        <Radio style={radioStyle} value={4}>
          Project Management
        </Radio>
        <Radio style={radioStyle} value={5}>
          Engineering Leadership
        </Radio>
      </Radio.Group>
    </>
  );
}

export default RenderContextRadio;
