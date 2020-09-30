//from packages
import React, { useState } from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

//from files
import { toggleJoinSurveyModal } from '../../state/actions/displayModalAction';

function RenderJoinSurveyModal() {
  const displayJoinSurveyModal = useSelector(
    state => state.displayJoinSurveyModal
  );
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();

  const [joinCode, setJoinCode] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [failureMessage, setFailureMessage] = useState(null);
  const joinTopicUrl = `${process.env.REACT_APP_API_URI}/topics/${joinCode}/join`;

  const closeModal = e => {
    e.preventDefault();
    dispatch(toggleJoinSurveyModal());
  };

  const joinCodeChangeHandler = e => {
    e.preventDefault();
    setJoinCode(e.target.value);
  };

  const join = e => {
    e.preventDefault();
    console.log(currentUser.sub);
    axios
      .post(joinTopicUrl, { profile_id: currentUser.sub })
      .then(res => {
        setSuccessMessage('Successfully joined topic');
        setFailureMessage(null);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        setFailureMessage(err.message);
      });
  };

  function checkOkCondition(e) {
    if (successMessage === 'Successfully joined topic') {
      closeModal(e);
    } else if (joinCode.length) {
      join(e);
    } else {
      return null;
    }
  }

  return (
    <div>
      <Modal
        title="Join Topic"
        visible={displayJoinSurveyModal}
        onCancel={closeModal}
        onOk={checkOkCondition}
      >
        <form onSubmit={join}>
          <input
            placeholder="Enter Join Code"
            type="text"
            onChange={joinCodeChangeHandler}
            value={joinCode}
          />
        </form>
        <div>
          {successMessage ? <h3>{successMessage}</h3> : null}
          {failureMessage ? <h3>{failureMessage}</h3> : null}
        </div>
      </Modal>
    </div>
  );
}

export default RenderJoinSurveyModal;
