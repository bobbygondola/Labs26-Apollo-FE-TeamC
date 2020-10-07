// packages
import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useSelector } from 'react-redux';

// files
import '../../styles/TopicIterationReplies.css';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function RenderTopicIterationReplies(props) {
  const currentRequestId = useSelector(state => state.currentRequestId);
  const { authState } = useOktaAuth();
  const [requestReplies, setRequestReplies] = useState([]);

  console.log(requestReplies);

  useEffect(() => {
    axiosWithAuth(authState)
      .get(`requests/${currentRequestId}/replies`)
      .then(res => {
        setRequestReplies(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [currentRequestId]);

  return (
    <div className="topicIterationReplies__container">
      <div>REPLIES</div>
    </div>
  );
}

export default RenderTopicIterationReplies;
