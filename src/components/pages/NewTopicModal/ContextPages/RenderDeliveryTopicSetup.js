import React from 'react';
import FormInput from '../../../common/FormInput';

const RenderDeliveryTopicSetup = () => {
  return (
    <>
      <h1>Delivery Topic</h1>
      <p>
        Let's set up the questions you will answer for the team as part of your
        request
      </p>
      <h2>Context Questions</h2>
      <FormInput labelId="What is the current priority?" name="Question 1" />
      <FormInput
        labelId="Do you have any key learnings to share with the team from stakeholders or customer?"
        name="Question 2"
      />
      <FormInput
        labelId="What upcoming demos or events should the team be aware of?"
        name="Question 3"
      />
    </>
  );
};

export default RenderDeliveryTopicSetup;
