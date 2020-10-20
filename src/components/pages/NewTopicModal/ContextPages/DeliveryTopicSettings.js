import React from 'react';
import FormInput from '../../../common/FormInput';
import { Radio } from 'antd';

const DeliveryTopicSettings = ({ topic, setTopic }) => {
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
      <h2 style={{ color: '#3389FF', marginTop: '10px' }}>Frequency</h2>
      <FormInput
        labelId="Name: "
        name="Name"
        placeholder="Delivery Topic"
        value={topic.title}
        onChange={handleNameChange}
      />
      <h3 style={{ marginTop: '10px' }}>
        How Frequently do you want your team to be notified?
      </h3>
      <Radio.Group
        value={topic.frequencyRadioVal}
        size="large"
        style={{ display: 'flex', flexDirection: 'column', width: '20%' }}
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
      </Radio.Group>
    </>
  );
};

export default DeliveryTopicSettings;
