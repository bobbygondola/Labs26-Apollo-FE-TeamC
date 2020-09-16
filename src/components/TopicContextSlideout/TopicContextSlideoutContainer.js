import React from 'react';
import RenderTopicContextSlideout from './RenderTopicContextSlideout';

const dummyData = [
  {
    topic_id: 1,
    instance_id: 1,
    date: '9/14/2020',
    name: 'Labs 26 Team A',
    members: [
      {
        member_id: 1,
        name: 'Dave',
        role: 'Admin',
      },
      {
        member_id: 2,
        name: 'Doug',
        role: 'Marketing',
      },
      {
        member_id: 3,
        name: 'Dan',
        role: 'IT',
      },
    ],
    questions_with_context: [
      {
        q_id: 1,
        question: 'What are you doing this weekend?',
        context:
          'This is asked to check in with the team and see what fun stuff they have going on.',
      },
      {
        q_id: 2,
        question: 'What kind of car do you drive?',
        context: 'It is crucial that we know what kind of wheels you have.',
      },
      {
        q_id: 3,
        question: 'What is your freshest outfit?',
        context: 'We need the team to look fresh at all times.',
      },
    ],
  },
  {
    topic_id: 1,
    instance_id: 2,
    date: '9/15/2020',
    name: 'Labs 26 Team A',
    members: [
      {
        member_id: 1,
        name: 'Dave',
        role: 'Admin',
      },
      {
        member_id: 2,
        name: 'Doug',
        role: 'Marketing',
      },
      {
        member_id: 3,
        name: 'Dan',
        role: 'IT',
      },
      {
        member_id: 4,
        name: 'Dianne',
        role: 'CTO',
      },
    ],
    questions_with_context: [
      {
        q_id: 1,
        question: 'What did you  weekend?',
        context:
          'This is asked to check in with the team and see what fun stuff they have going on.',
      },
      {
        q_id: 2,
        question: 'What kind of car do you drive?',
        context: 'It is crucial that we know what kind of wheels you have.',
      },
      {
        q_id: 3,
        question: 'What is your freshest outfit?',
        context: 'We need the team to look fresh at all times.',
      },
    ],
  },
];

const TopicContextSlideoutContainer = () => {
  return <RenderTopicContextSlideout data={dummyData} />;
};

export default TopicContextSlideoutContainer;
