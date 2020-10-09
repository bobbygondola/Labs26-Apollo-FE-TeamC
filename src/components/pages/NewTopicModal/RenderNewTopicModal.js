import React, { useState } from 'react';
import RenderContextRadio from './ContextPages/RenderContextRadio';
import RenderDeliveryTopicSettings from './ContextPages/RenderDeliveryTopicSettings';
import RenderDeliveryTopicSetup from './ContextPages/RenderDeliveryTopicSetup';
import RenderGroupQuestions from './ContextPages/RenderGroupQuestions';
import { Button, Modal, Steps } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';

import {
  toggleDisplayModal,
  toggleJoinCodeModal,
  captureJoinCode,
  setTopicsList,
} from '../../../state/actions/displayModalAction';
import { axiosWithAuth } from '../../../utils/axiosWithAuth';
import { topicInitialState, topicModalSteps } from './data';

function RenderNewTopicModal() {
  const displayModal = useSelector(state => state.displayModal);
  const dispatch = useDispatch();
  const { authState } = useOktaAuth();
  const [page, setPage] = useState(0);
  const [topic, setTopic] = useState(topicInitialState);
  const { Step } = Steps;

  const newTopicPostUrl = `topics`;

  const closeModal = e => {
    e.preventDefault();
    dispatch(toggleDisplayModal());
  };

  const nextPage = e => {
    e.preventDefault();
    setPage(page + 1);
  };

  const prevPage = e => {
    e.preventDefault();
    setPage(page - 1);
  };

  const submit = e => {
    if (page === topicModalSteps.length - 1) {
      e.preventDefault();
      axiosWithAuth(authState)
        .post(newTopicPostUrl, topic)
        .then(res => {
          dispatch(captureJoinCode(res.data.id));
          dispatch(toggleDisplayModal());
          dispatch(toggleJoinCodeModal());
          axiosWithAuth(authState)
            .get(`profile/${res.data.created_by}/my-created-topics`)
            .then(res => {
              dispatch(setTopicsList(res.data.topics));
            })
            .catch(err => {
              alert('nah');
            });
        })
        .catch(err => {
          alert(err, 'Error while submitting new topic');
        });
    }
  };

  return (
    <>
      <Modal
        title="New Topic"
        visible={displayModal}
        onCancel={closeModal}
        onOk={submit}
        width={800}
        okText={'Submit'}
      >
        <Steps current={page}>
          {topicModalSteps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div>{topicModalSteps[page].content}</div>
        {page === 0 ? (
          <RenderContextRadio topic={topic} setTopic={setTopic} />
        ) : null}
        {page === 1 ? (
          <RenderDeliveryTopicSettings topic={topic} setTopic={setTopic} />
        ) : null}
        {page === 2 ? (
          <RenderDeliveryTopicSetup topic={topic} setTopic={setTopic} />
        ) : null}
        {page === 3 ? (
          <RenderGroupQuestions topic={topic} setTopic={setTopic} />
        ) : null}

        <div>
          {page !== 0 ? <Button onClick={prevPage}>Prev</Button> : null}
          {page < topicModalSteps.length - 1 ? (
            <Button onClick={nextPage}>Next</Button>
          ) : null}
        </div>
      </Modal>
    </>
  );
}

export default RenderNewTopicModal;
