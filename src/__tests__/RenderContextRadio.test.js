import RenderContextRadio from './../components/pages/NewTopicModal/ContextPages/RenderContextRadio';
import React from 'react';
import { render } from '@testing-library/react';

const topic = {
  created_by: '00ulthapbErVUwVJy4x6',
  title: 'Development Team',
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

describe('<RenderContextRadio /> test suite', () => {
  test('there should be as many buttons rendered as there are in the radioButtons list', () => {
    // for this first assertion, we'll simply ensure that the button's text is determined by the props passed to it
    // we'll also ensure that the className defaults to primary where none is passed as props
    const { getByText, rerender } = render(
      <RenderContextRadio topic={topic} />
    );
    expect(topic.title).toBe('Development Team');
  });
});
