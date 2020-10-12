import React, { useState } from 'react';
import ContextRadio from './ContextPages/ContextRadio';
import DeliveryTopicSettings from './ContextPages/DeliveryTopicSettings';
import DeliveryTopicSetup from './ContextPages/DeliveryTopicSetup';
import GroupQuestions from './ContextPages/GroupQuestions';
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

function NewTopicModal() {
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
        {page === 0 ? <ContextRadio topic={topic} setTopic={setTopic} /> : null}
        {page === 1 ? (
          <DeliveryTopicSettings topic={topic} setTopic={setTopic} />
        ) : null}
        {page === 2 ? (
          <DeliveryTopicSetup topic={topic} setTopic={setTopic} />
        ) : null}
        {page === 3 ? (
          <GroupQuestions topic={topic} setTopic={setTopic} />
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

export default NewTopicModal;
