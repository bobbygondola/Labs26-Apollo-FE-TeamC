import React from 'react';

function ContextResponseQuestions(props) {
  const { requestedData, setRequestedData } = props;

  const changeHandler = e => {
    setRequestedData({
      ...requestedData,
      context_responses: requestedData.context_responses.map(response => {
        if (response.id == e.target.name) {
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
      {requestedData.context_responses.map(response => {
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
