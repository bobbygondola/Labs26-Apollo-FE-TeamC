import React from 'react';
import RenderNewTopicModal from './RenderNewTopicModal';

const NewTopicModalContainer = props => {
  const { displayModal } = props;
  console.log(displayModal);
  return <RenderNewTopicModal />;
};

export default NewTopicModalContainer;
