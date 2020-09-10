import React, { useState } from 'react';
import FormInput from '../../../common/FormInput';
import { Radio } from 'antd';

const RenderDeliveryTopicSettings = () => {
  const [radioVal, setRadioVal] = useState('Daily');

  const radioCheck = e => {
    setRadioVal(e.target.value);
  };

  return (
    <>
      <FormInput labelId="Name" name="Name" placeholder="Delivery Topic" />
      <h3>How Frequently do you want to be notified?</h3>
      <Radio.Group value={radioVal} size="large">
        <Radio.Button value={'Daily'} onChange={radioCheck}>
          Daily
        </Radio.Button>
        <Radio.Button value={'Weekly'} onChange={radioCheck}>
          Weekly
        </Radio.Button>
        <Radio.Button value={'Monthly'} onChange={radioCheck}>
          Monthly
        </Radio.Button>
        <Radio.Button value={'Quarterly'} onChange={radioCheck}>
          Quarterly
        </Radio.Button>
      </Radio.Group>
    </>
  );
};

export default RenderDeliveryTopicSettings;
