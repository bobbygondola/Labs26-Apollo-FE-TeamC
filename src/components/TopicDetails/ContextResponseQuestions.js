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
      <h2 style={{ marginBottom: '25px' }}>
        Add <strong style={{ color: '#3389FF' }}>Context</strong> for your team
      </h2>
      {requestData.context_responses.map(response => {
        return (
          <div key={response.id}>
            <form>
              <p>
                <strong style={{ fontSize: '18px' }}>
                  {response.question}
                </strong>
              </p>
              <textarea
                style={{ marginBottom: '25px' }}
                name={response.id}
                rows={3.5}
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
