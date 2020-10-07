// packages
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

// files
import { toggleNewRequestModal } from '../../state/actions/displayModalAction';

export const RenderNewRequestModal = props => {
  const { requestedData } = props;
  const displayNewRequestModal = useSelector(
    state => state.displayNewRequestModal
  );
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleNewRequestModal());
  };

  return (
    <div>
      <Modal onCancel={closeModal} visible={displayNewRequestModal}>
        {requestedData.context_responses.map(response => {
          return (
            <div key={response.id}>
              <p>{response.content}</p>
              <form>
                <input type="text" />
              </form>
            </div>
          );
        })}
      </Modal>
    </div>
  );
};

export default RenderNewRequestModal;
