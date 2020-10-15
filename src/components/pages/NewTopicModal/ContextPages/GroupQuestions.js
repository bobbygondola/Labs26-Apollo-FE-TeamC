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
        <h2>Default Questions</h2>

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
            <React.Fragment key={question.content + index}>
              <FormInput
                name="content"
                value={question.content}
                placeholder="Type question here"
                labelId={`Question ${index + 1}`}
                onChange={e => handleQuestionsChange(e, index)}
              />
              <p>Current response type: {question.response_type}</p>
              <Dropdown overlay={menu}>
                <Button className="ant-dropdown-link">
                  Hover me <DownOutlined />
                </Button>
              </Dropdown>

              <Button onClick={() => deleteDefaultQuestion(index)}>
                Delete
              </Button>
            </React.Fragment>
          );
        })}
      </div>
      <Button onClick={addDefaultQuestion}>Add New Question</Button>
    </>
  );
};

export default GroupQuestions;
