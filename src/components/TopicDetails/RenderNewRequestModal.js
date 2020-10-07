// packages
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'antd';

// files
import { toggleNewRequestModal } from '../../state/actions/displayModalAction';
import RenderContextResponseQuestions from './RenderContextResponseQuestions';
import RenderEditQuestions from './RenderEditQuestions';

export const RenderNewRequestModal = props => {
  const { requestedData, setRequestedData } = props;
  const displayNewRequestModal = useSelector(
    state => state.displayNewRequestModal
  );
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleNewRequestModal());
  };

  const submitResponses = e => {
    e.preventDefault();
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
      <Modal onCancel={closeModal} visible={displayNewRequestModal}>
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
