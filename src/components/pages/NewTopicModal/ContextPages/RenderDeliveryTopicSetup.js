import React from 'react';
import FormInput from '../../../common/FormInput';
import { Button } from 'antd';

const RenderDeliveryTopicSetup = ({ topic, setTopic }) => {
  const handleQuestionsChange = (e, index) => {
    setTopic({
      ...topic,
      default_questions: topic.default_questions.map((q, i) => {
        if (index === i) return e.target.value;
        return q;
      }),
    });
  };

  return (
    <>
      <h1>Delivery Topic</h1>
      <p>
        Let's set up the questions you will answer for the team as part of your
        request
      </p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Context Questions</h2>

        {topic.default_questions.map((question, index) => {
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
            default_questions: [...topic.default_questions, ''],
          })
        }
      >
        Add New Question
      </Button>
    </>
  );
};

export default RenderDeliveryTopicSetup;
