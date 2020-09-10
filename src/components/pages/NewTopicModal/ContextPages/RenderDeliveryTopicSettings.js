import React from 'react';
import FormInput from '../../../common/FormInput';

const RenderDeliveryTopicSettings = () => {
  return (
    <>
      <FormInput labelId="Name" name="Name" placeholder="Delivery Topic" />
      <h3>How Frequently do you want to be notified?</h3>
    </>
  );
};

export default RenderDeliveryTopicSettings;
