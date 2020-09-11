import React, { useState } from 'react';
import RenderContextRadio from './ContextPages/RenderContextRadio';
import RenderDeliveryTopicSettings from './ContextPages/RenderDeliveryTopicSettings';
import RenderDeliveryTopicSetup from './ContextPages/RenderDeliveryTopicSetup';
import { Button, Modal, Steps } from 'antd';

function RenderNewTopicModal(props) {
  const [page, setPage] = useState(0);
  const [displayModal, setDisplayModal] = useState(false);

  const { Step } = Steps;
  const steps = [
    {
      title: 'Context',
      content: 'What type of context do you provide to the team?',
    },
    {
      title: 'Frequency',
      content: 'How frequently do you want to be notified?',
    },
    {
      title: 'Context Questions',
      content: `Let's set up the questions you will answer for the team as part of your request`,
    },
  ];

  const showModal = () => {
    setDisplayModal(true);
  };

  const closeModal = e => {
    setDisplayModal(false);
  };

  const nextPage = e => {
    e.preventDefault();
    setPage(page + 1);
  };

  const prevPage = e => {
    e.preventDefault();
    setPage(page - 1);
  };

  return (
    <>
      <Modal title="New Topic" visible={displayModal} onCancel={closeModal}>
        <Steps current={page}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div>{steps[page].content}</div>
        {page === 0 ? <RenderContextRadio /> : null}
        {page === 1 ? <RenderDeliveryTopicSettings /> : null}
        {page === 2 ? <RenderDeliveryTopicSetup /> : null}

        {/* next & prev buttons */}
        <div>
          {page !== 0 ? <Button onClick={prevPage}>Prev</Button> : null}
          {page < steps.length - 1 ? (
            <Button onClick={nextPage}>Next</Button>
          ) : null}
        </div>
        {/* end next & prev buttons */}
      </Modal>
      <Button onClick={showModal} type="primary">
        New Topic
      </Button>
    </>
  );
}

export default RenderNewTopicModal;
