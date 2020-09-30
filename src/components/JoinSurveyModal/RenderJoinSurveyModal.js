//from packages
import React, { useState } from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

//from files
import { toggleJoinSurveyModal } from '../../state/actions/displayModalAction';
import FormInput from '../common/FormInput';

function RenderJoinSurveyModal() {
  const displayJoinSurveyModal = useSelector(
    state => state.displayJoinSurveyModal
  );
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();

  const [joinCode, setJoinCode] = useState('');
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
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Modal
        title="Join Topic"
        visible={displayJoinSurveyModal}
        onCancel={closeModal}
        onOk={joinCode.length ? join : null}
      >
        <form onSubmit={join}>
          <input
            placeholder="Enter Join Code"
            type="text"
            onChange={joinCodeChangeHandler}
            value={joinCode}
          />
        </form>
      </Modal>
    </div>
  );
}

export default RenderJoinSurveyModal;
