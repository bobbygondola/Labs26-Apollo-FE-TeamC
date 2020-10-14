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
      {requestData.topic_questions.map((question, idx) => {
        return (
          <div key={idx}>
            <form>
              <textarea
                id={idx}
                rows={4}
                cols={40}
                placeholder={question.content}
                onChange={changeHandler}
                value={question.content}
              />
            </form>

            <Button onClick={() => deleteQuestion(idx)}>Delete Question</Button>
          </div>
        );
      })}
      <Button onClick={addQuestion}>Add New Question</Button>
    </div>
  );
}

export default EditQuestions;
