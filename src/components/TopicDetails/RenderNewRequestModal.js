// packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

// files
import { toggleNewRequestModal } from '../../state/actions/displayModalAction';

export const RenderNewRequestModal = props => {
  const { requestedData, setRequestedData } = props;
  const displayNewRequestModal = useSelector(
    state => state.displayNewRequestModal
  );

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleNewRequestModal());
  };

  const changeHandler = e => {
    setRequestedData({
      ...requestedData,
      context_responses: requestedData.context_responses.map(response => {
        if (response.id == e.target.name) {
          return {
            ...response,
            content: e.target.value,
          };
        } else {
          return response;
        }
      }),
    });
  };

  const submitResponses = e => {
    e.preventDefault();
  };

  return (
    <div>
      <Modal onCancel={closeModal} visible={displayNewRequestModal}>
        {requestedData.context_responses.map(response => {
          return (
            <div key={response.id}>
              <form>
                <p>{response.question}</p>
                <textarea
                  name={response.id}
                  rows={4}
                  cols={40}
                  placeholder="Enter Response..."
                  onChange={changeHandler}
                  value={response.content}
                />
              </form>
            </div>
          );
        })}
      </Modal>
    </div>
  );
};

export default RenderNewRequestModal;
