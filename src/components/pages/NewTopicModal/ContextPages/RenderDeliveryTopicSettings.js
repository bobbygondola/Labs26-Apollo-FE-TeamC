import React from 'react';
import FormInput from '../../../common/FormInput';
import { Radio } from 'antd';

const RenderDeliveryTopicSettings = ({ topic, setTopic }) => {
  const radioCheck = e => {
    setTopic({ ...topic, frequency: e.target.value });
  };

  const handleNameChange = e => {
    setTopic({
      ...topic,
      title: e.target.value,
    });
  };

  return (
    <>
      <h2>Frequency</h2>
      <FormInput
        labelId="Name"
        name="Name"
        placeholder="Delivery Topic"
        value={topic.title}
        onChange={handleNameChange}
      />
      <h3>How Frequently do you want to be notified?</h3>
      <Radio.Group
        value={topic.frequencyRadioVal}
        size="large"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
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
