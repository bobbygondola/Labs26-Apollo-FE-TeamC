import React from 'react';

function RenderEditQuestions(props) {
  const { requestedData, setRequestedData } = props;

  const changeHandler = e => {
    setRequestedData({
      ...requestedData,
      topic_questions: requestedData.topic_questions.map(question => {
        if (question.id - 1 == e.target.id) {
          return {
            ...question,
            response: e.target.value,
          };
        } else {
          return question;
        }
      }),
    });
  };
  return (
    <div>
      {requestedData.topic_questions.map((idx, question) => {
        console.log(idx, question);
        console.log(question.content);
        return (
          <div key={question.content}>
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
          </div>
        );
      })}
    </div>
  );
}

export default RenderEditQuestions;
