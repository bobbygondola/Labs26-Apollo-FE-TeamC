import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { toggleNewRequestModal } from '../../state/actions/displayModalAction';
import ContextResponseQuestions from './ContextResponseQuestions';
import EditQuestions from './EditQuestions';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { toggleNewRequestSuccessModal } from '../../state/actions/displayModalAction';

export const NewRequestModal = props => {
  const { requestData, setRequestData, currentTopicId } = props;
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
        topic_questions: requestData.topic_questions.map(question => {
          return {
            content: question.content,
            response_type: question.response_type,
          };
        }),
        context_responses: requestData.context_responses.map(response => {
          return {
            content: response.content,
            id: response.id,
          };
        }),
      };
      axiosWithAuth(authState)
        .post(`topics/${currentTopicId}/request`, processedData)
        .then(res => {
          dispatch(toggleNewRequestModal());
          dispatch(toggleNewRequestSuccessModal());
        })
        .catch(err => {
          alert(err);
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
          <ContextResponseQuestions
            requestData={requestData}
            setRequestData={setRequestData}
          />
        )}
        {page === 1 && (
          <EditQuestions
            requestData={requestData}
            setRequestData={setRequestData}
          />
        )}
        {page !== 0 && <Button onClick={prevPage}>Prev</Button>}
        {page < 1 && <Button onClick={nextPage}>Next</Button>}
      </Modal>
    </div>
  );
};

export default NewRequestModal;
