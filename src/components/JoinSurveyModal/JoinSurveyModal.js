import React, { useState } from 'react';
import { Modal } from 'antd';
import '../../styles/TopicIterationReplies.css';
import { useSelector, useDispatch } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import {
  setTopicsList,
  toggleJoinSurveyModal,
} from '../../state/actions/displayModalAction';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function JoinSurveyModal() {
  const displayJoinSurveyModal = useSelector(
    state => state.displayJoinSurveyModal
  );
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();

  const [joinCode, setJoinCode] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [failureMessage, setFailureMessage] = useState(null);
  const joinTopicUrl = `topics/${joinCode}/join`;
  const { authState } = useOktaAuth();

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
    axiosWithAuth(authState)
      .post(joinTopicUrl, { profile_id: currentUser.sub })
      .then(res => {
        setSuccessMessage('Successfully joined topic');
        setFailureMessage(null);
        axiosWithAuth(authState)
          .get('topics')
          .then(res => {
            dispatch(setTopicsList(res.data.myTopics));
          });
      })
      .catch(err => {
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
            style={{ backgroundColor: 'lightgrey' }}
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

export default JoinSurveyModal;
