import React, { useState, useEffect } from 'react';
import FormInput from '../../../common/FormInput';
import { Button, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export const questions = [
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
  const handleQuestionsChange = (e, index) => {
    setTopic({
      ...topic,
      default_questions: topic.default_questions.map((question, idx) => {
        return idx === index
          ? { ...question, [e.target.name]: e.target.value }
          : question;
      }),
    });
  };

  return (
    <>
      <h1>Delivery Topic</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Context Questions</h2>

        {topic.default_questions.map((question, index) => {
          return (
            <>
              <FormInput
                name="content"
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
            default_questions: [
              ...topic.default_questions,
              { content: '', response_type: 'String' },
            ],
          })
        }
      >
        Add New Question
      </Button>
    </>
  );
};

export default RenderDeliveryTopicSetup;
