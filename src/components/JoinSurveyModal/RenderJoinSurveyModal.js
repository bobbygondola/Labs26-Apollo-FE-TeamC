//from packages
import React from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

//from files
import { toggleJoinSurveyModal } from '../../state/actions/displayModalAction';

function RenderJoinSurveyModal() {
  const displayJoinSurveyModal = useSelector(
    state => state.displayJoinSurveyModal
  );
  const dispatch = useDispatch();

  const closeModal = e => {
    e.preventDefault();
    dispatch(toggleJoinSurveyModal());
  };

  return (
    <div>
      <Modal
        title="Join Topic"
        visible={displayJoinSurveyModal}
        onCancel={closeModal}
      ></Modal>
    </div>
  );
}

export default RenderJoinSurveyModal;
