import React from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNewRequestSuccessModal } from '../../state/actions/displayModalAction';

const RequestSuccessModal = () => {
  const displayNewRequestSuccessModal = useSelector(
    state => state.displayNewRequestSuccessModal
  );
  const dispatch = useDispatch();

  const closeModal = e => {
    e.preventDefault();
    dispatch(toggleNewRequestSuccessModal());
  };

  return (
    <>
      <Modal
        title="New Request"
        visible={displayNewRequestSuccessModal}
        onCancel={closeModal}
        onOk={closeModal}
      >
        <h1>New Request Created</h1>
      </Modal>
    </>
  );
};

export default RequestSuccessModal;
