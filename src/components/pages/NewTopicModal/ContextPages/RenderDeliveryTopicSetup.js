import React from 'react';
import FormInput from '../../../common/FormInput';
import { Button } from 'antd';

const RenderDeliveryTopicSetup = ({ topic, setTopic }) => {
  const handleQuestionsChange = (e, index) => {
    setTopic({
      ...topic,
      context_questions: topic.context_questions.map((q, i) => {
        if (index === i) return e.target.value;
        return q;
      }),
    });
  };

  return (
    <>
      <h1>Delivery Topic</h1>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Context Questions</h2>

        {topic.context_questions.map((question, index) => {
          return (
            <>
              <FormInput
                key={index}
                name={question}
                value={question}
                placeholder={question}
                labelId={`Question ${index + 1}`}
                onChange={e => handleQuestionsChange(e, index)}
              />
              <Button
                onClick={() =>
                  setTopic({
                    ...topic,
                    context_questions: topic.context_questions.filter(
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
            context_questions: [...topic.context_questions, ''],
          })
        }
      >
        Add New Question
      </Button>
    </>
  );
};

export default RenderDeliveryTopicSetup;
