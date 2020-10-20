export const topicInitialState = {
  title: '',
  frequency: 'Daily',
  context_questions: [
    'What is the current priority?',
    'Do you have any key learnings to share with the team from stakeholders or customers?',
    'What upcoming demos or events should the team be aware of?',
  ],
  default_questions: [
    {
      content: 'What did you accomplish yesterday?',
      response_type: 'String',
    },
    { content: 'What are you working on today?', response_type: 'String' },
    {
      content: 'Are there any monsters in your path?',
      response_type: 'String',
    },
  ],
};

export const topicModalSteps = [
  {
    title: 'Context',
    content: 'What type of context do you provide to the team?',
  },
  {
    title: 'Frequency',
  },
  {
    title: 'Context Questions',
    content: `Let's set up the questions you will answer for the team as part of your request`,
  },
  {
    title: 'Group Questions',
    content: `Let's set up the questions your team will answer`,
  },
];

export const radioButtons = [
  {
    value: 0,
    description: 'Product Leadership',
  },
  {
    value: 1,
    description: 'Delivery Management',
  },
  {
    value: 2,
    description: 'Design Leadership',
  },
  { value: 3, description: 'Project Management' },
  {
    value: 4,
    description: 'Engineering Leadership',
  },
];

export const defaultQuestions = [
  [
    {
      content: 'What did you accomplish yesterday?',
      response_type: 'String',
    },
    { content: 'What are you working on today?', response_type: 'String' },
    {
      content: 'Are there any blockers in your path?',
      response_type: 'String',
    },
  ],
  [
    {
      content: 'Which features are ready to submit for review?',
      response_type: 'String',
    },
    {
      content: 'Which features are your top priority this week?',
      response_type: 'String',
    },
    {
      content: 'Are there any issues with the current projected timeline?',
      response_type: 'String',
    },
  ],
  [
    {
      content: 'Do you have any concerns with the current design?',
      response_type: 'String',
    },
    {
      content:
        'Do you have any edits for the design team to make to the wire frames?',
      response_type: 'String',
    },
  ],
  [
    {
      content: 'Have any tickets given you specific issues today?',
      response_type: 'String',
    },
    {
      content: 'Are there any issues with the current projected timeline?',
      response_type: 'String',
    },
    {
      content: 'Do you have any requests for the project leadership?',
      response_type: 'String',
    },
  ],
  [
    {
      content: 'Have any tickets given you specific issues today?',
      response_type: 'String',
    },
    {
      content: 'Are there any issues with the current projected timeline?',
      response_type: 'String',
    },
    {
      content: 'Do you have any requests for the project leadership?',
      response_type: 'String',
    },
  ],
];
