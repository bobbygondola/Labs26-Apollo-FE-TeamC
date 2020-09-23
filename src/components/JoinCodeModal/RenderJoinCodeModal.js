import React from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { toggleJoinCodeModal } from '../../state/actions/displayModalAction';

const RenderJoinCodeModal = () => {
  const displayJoinCodeModal = useSelector(state => state.displayJoinCodeModal);
  const joinCode = useSelector(state => state.joinCode);
  const dispatch = useDispatch();

  const closeModal = e => {
    e.preventDefault();
    dispatch(toggleJoinCodeModal());
  };

  return (
    <>
      <Modal
        title="Join Code"
        visible={displayJoinCodeModal}
        onCancel={closeModal}
        onOk={closeModal}
      >
        <h1>Topic Created</h1>
        <h2>Your Join Code: {joinCode}</h2>
      </Modal>
    </>
  );
};

export default RenderJoinCodeModal;
