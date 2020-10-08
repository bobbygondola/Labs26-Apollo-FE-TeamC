// packages
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'antd';
import { useOktaAuth } from '@okta/okta-react';

// files
import { toggleNewRequestModal } from '../../state/actions/displayModalAction';
import RenderContextResponseQuestions from './RenderContextResponseQuestions';
import RenderEditQuestions from './RenderEditQuestions';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { toggleNewRequestSuccessModal } from '../../state/actions/displayModalAction';

export const RenderNewRequestModal = props => {
  const { requestedData, setRequestedData, currentTopicId } = props;
  const displayNewRequestModal = useSelector(
    state => state.displayNewRequestModal
  );
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { authState } = useOktaAuth();

  const closeModal = () => {
    dispatch(toggleNewRequestModal());
  };

  const submitResponses = e => {
    e.preventDefault();
    if (page === 1) {
      const processedData = {
        topic_questions: requestedData.topic_questions.map(question => {
          return {
            content: question.content,
            response_type: question.response_type,
          };
        }),
        context_responses: requestedData.context_responses.map(response => {
          return {
            content: response.content,
            id: response.id,
          };
        }),
      };
      console.log(processedData);
      axiosWithAuth(authState)
        .post(`topics/${currentTopicId}/request`, processedData)
        .then(res => {
          console.log(res);
          dispatch(toggleNewRequestModal());
          dispatch(toggleNewRequestSuccessModal());
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const prevPage = e => {
    e.preventDefault();
    setPage(page - 1);
  };

  const nextPage = e => {
    e.preventDefault();
    setPage(page + 1);
  };

  return (
    <div>
      <Modal
        onCancel={closeModal}
        onOk={submitResponses}
        visible={displayNewRequestModal}
      >
        {page === 0 && (
          <RenderContextResponseQuestions
            requestedData={requestedData}
            setRequestedData={setRequestedData}
          />
        )}
        {page === 1 && (
          <RenderEditQuestions
            requestedData={requestedData}
            setRequestedData={setRequestedData}
          />
        )}
        {page !== 0 && <Button onClick={prevPage}>Prev</Button>}
        {page < 1 && <Button onClick={nextPage}>Next</Button>}
      </Modal>
    </div>
  );
};

export default RenderNewRequestModal;
