import React from 'react';

function ContextResponseQuestions(props) {
  const { requestData, setRequestData } = props;

  const changeHandler = e => {
    setRequestData({
      ...requestData,
      context_responses: requestData.context_responses.map(response => {
        if (response.id === Number(e.target.name)) {
          return {
            ...response,
            content: e.target.value,
          };
        } else {
          return response;
        }
      }),
    });
  };

  return (
    <div>
      {requestData.context_responses.map(response => {
        return (
          <div key={response.id}>
            <form>
              <p>{response.question}</p>
              <textarea
                name={response.id}
                rows={4}
                cols={40}
                placeholder="Enter Response..."
                onChange={changeHandler}
                value={response.content}
              />
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default ContextResponseQuestions;
