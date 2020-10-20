import React from 'react';
import { Button } from 'antd';

function EditQuestions(props) {
  const { requestData, setRequestData } = props;

  const changeHandler = e => {
    setRequestData({
      ...requestData,
      topic_questions: requestData.topic_questions.map((question, idx) => {
        if (idx === Number(e.target.id)) {
          return {
            ...question,
            content: e.target.value,
          };
        } else {
          return question;
        }
      }),
    });
  };

  const addQuestion = () => {
    setRequestData({
      ...requestData,
      topic_questions: [
        ...requestData.topic_questions,
        {
          content: '',
          response_type: 'String',
        },
      ],
    });
  };

  const deleteQuestion = questionId => {
    setRequestData({
      ...requestData,
      topic_questions: requestData.topic_questions.filter((question, idx) => {
        return idx !== questionId ? question : null;
      }),
    });
  };

  return (
    <div>
      <h2 style={{ marginBottom: '25px' }}>
        <strong style={{ color: '#3389FF' }}>Add</strong> or{' '}
        <strong style={{ color: '#3389FF' }}>Edit</strong> questions
      </h2>
      {requestData.topic_questions.map((question, idx) => {
        return (
          <div key={idx}>
            <form>
              <textarea
                id={idx}
                rows={3}
                cols={40}
                placeholder={question.content}
                onChange={changeHandler}
                value={question.content}
              />
            </form>

            <Button
              style={{ marginBottom: '35px', color: 'red' }}
              onClick={() => deleteQuestion(idx)}
            >
              Remove
            </Button>
          </div>
        );
      })}
      <Button
        style={{
          marginBottom: '30px',
          backgroundColor: '#4C4CFF',
          color: 'white',
        }}
        onClick={addQuestion}
      >
        Add New Question
      </Button>
    </div>
  );
}

export default EditQuestions;
