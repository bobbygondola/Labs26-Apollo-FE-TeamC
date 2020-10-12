import React from 'react';
import FormInput from '../../../common/FormInput';
import { Button } from 'antd';

const DeliveryTopicSetup = ({ topic, setTopic }) => {
  const handleContextQuestionsChange = (e, index) => {
    setTopic({
      ...topic,
      context_questions: topic.context_questions.map((q, i) => {
        if (index === i) return e.target.value;
        return q;
      }),
    });
  };

  const deleteContextQuestion = index => {
    setTopic({
      ...topic,
      context_questions: topic.context_questions.filter((q, i) => {
        return i !== index ? q : null;
      }),
    });
  };

  const addContextQuestion = () => {
    setTopic({
      ...topic,
      context_questions: [...topic.context_questions, ''],
    });
  };

  return (
    <>
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
                onChange={e => handleContextQuestionsChange(e, index)}
              />
              <Button onClick={() => deleteContextQuestion(index)}>
                Delete
              </Button>
            </>
          );
        })}
      </div>
      <Button onClick={addContextQuestion}>Add New Question</Button>
    </>
  );
};

export default DeliveryTopicSetup;
