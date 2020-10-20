import React from 'react';
import FormInput from '../../../common/FormInput';
import { Button, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const GroupQuestions = ({ topic, setTopic }) => {
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

  const deleteDefaultQuestion = index => {
    setTopic({
      ...topic,
      default_questions: topic.default_questions.filter((q, i) => {
        return i !== index ? q : null;
      }),
    });
  };

  const addDefaultQuestion = () => {
    setTopic({
      ...topic,
      default_questions: [
        ...topic.default_questions,
        { content: '', response_type: 'String' },
      ],
    });
  };

  const changeQuestionResponseType = (question, key) => {
    setTopic({
      ...topic,
      default_questions: topic.default_questions.map(q => {
        if (q.content === question.content) {
          return { content: q.content, response_type: key };
        }
        return q;
      }),
    });
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ color: '#3389FF', marginTop: '20px' }}>
          Default Questions
        </h2>

        {topic.default_questions.map((question, index) => {
          const menu = (
            <Menu
              onClick={({ key }) => changeQuestionResponseType(question, key)}
            >
              <Menu.Item key="String">String</Menu.Item>
              <Menu.Item key="Rating">Rating 1-5</Menu.Item>
              <Menu.Item key="Boolean">True or False</Menu.Item>
              <Menu.Item key="Url">Url</Menu.Item>
            </Menu>
          );
          return (
            <React.Fragment key={'defaultQuestion' + index}>
              <FormInput
                name="content"
                value={question.content}
                placeholder="Type question here"
                labelId={`Question ${index + 1}`}
                onChange={e => handleQuestionsChange(e, index)}
              />
              <p>
                Current response type:{' '}
                <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                  {question.response_type}
                </span>
              </p>
              <div style={{ display: 'flex' }}>
                <Dropdown overlay={menu}>
                  <Button
                    style={{
                      width: '18%',
                      marginBottom: '35px',
                      marginTop: '-5px',
                    }}
                    className="ant-dropdown-link"
                  >
                    Response Type <DownOutlined />
                  </Button>
                </Dropdown>

                <Button
                  style={{
                    width: '18%',
                    marginBottom: '35px',
                    marginTop: '-5px',
                    color: '#FF4C4C',
                  }}
                  onClick={() => deleteDefaultQuestion(index)}
                >
                  Delete
                </Button>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <Button
        style={{ backgroundColor: '#5D5DFF', color: 'white' }}
        onClick={addDefaultQuestion}
      >
        Add New Question
      </Button>
    </>
  );
};

export default GroupQuestions;
