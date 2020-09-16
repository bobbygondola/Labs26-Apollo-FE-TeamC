import React from 'react';
import RenderTopicContextSlideout from './RenderTopicContextSlideout';

const dummyData = {
  id: 1,
  created_by: '00ulthapbErVUwVJy4x6',
  frequency: 'daily',
  title: 'Development Team',
  members: [
    {
      id: '00ulthapbErVUwVJy4x6',
      name: 'Bugs Bunny',
    },
    {
      id: 'whooooooooooooooooo',
      name: 'Elmer Fudd',
    },
  ],
  context_questions: [
    {
      id: 1,
      content: 'What is the current priority?',
    },
    {
      id: 2,
      content:
        'Do you have any key learnings to share with the team from stakeholders or customers?',
    },
    {
      id: 3,
      content: 'What upcoming demos or events should the team be aware of?',
    },
  ],
  default_questions: [
    {
      id: 1,
      content: 'What did you accomplish yesterday?',
      response_type: 'string',
    },
    {
      id: 2,
      content: 'What are you working on today?',
      response_type: 'string',
    },
    {
      id: 3,
      content: 'Are there any monsters in your path?',
      response_type: 'string',
    },
  ],
  topic_iteration_requests: [
    {
      id: 1,
      posted_at: '2020-09-15T22:02:31.941Z',
    },
    {
      id: 2,
      posted_at: '2020-09-15T22:02:31.941Z',
    },
    {
      id: 3,
      posted_at: '2020-09-15T22:02:31.941Z',
    },
  ],
};

const TopicContextSlideoutContainer = () => {
  return <RenderTopicContextSlideout data={dummyData} />;
};

export default TopicContextSlideoutContainer;
