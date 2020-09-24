import React, { useState, useEffect } from 'react';
import FormInput from '../../../common/FormInput';
import { Button, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const questions = [
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

const RenderDeliveryTopicSetup = ({ topic, setTopic }) => {
  const [currentContext] = questions.filter((question, index) => {
    return topic.contextRadioVal === index;
  });

  const handleQuestionsChange = (e, index) => {
    setTopic({
      ...topic,
      default_questions: currentContext,
    });
  };

  const [count, setCount] = useState('1');

  const onClick = ({ key }) => {
    setCount(key);
    console.log(count);
  };
  console.log(currentContext);
  return (
    <>
      <h1>Delivery Topic</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Context Questions</h2>

        {currentContext.map((question, index) => {
          console.log(question);
          return (
            <>
              <FormInput
                value={question.content}
                labelId={`Question ${index + 1}`}
                onChange={e => handleQuestionsChange(e, index)}
              />
              <Button
                onClick={() =>
                  setTopic({
                    ...topic,
                    default_questions: topic.default_questions.filter(
                      (q, i) => {
                        return i !== index ? q : null;
                      }
                    ),
                  })
                }
              >
                Delete
              </Button>
            </>
          );
        })}
      </div>
      <Button
        onClick={() =>
          setTopic({
            ...topic,
            default_questions: [...currentContext, ''],
          })
        }
      >
        Add New Question
      </Button>
    </>
  );
};

export default RenderDeliveryTopicSetup;
