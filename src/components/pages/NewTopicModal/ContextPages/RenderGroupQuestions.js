import React, { useState } from 'react';
import FormInput from '../../../common/FormInput';
import { Button, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const RenderDeliveryTopicSetup = ({ topic, setTopic }) => {
  const handleQuestionsChange = (e, index) => {
    setTopic({
      ...topic,
      default_questions2: topic.default_questions2.map((q, i) => {
        if (index === i) return { content: e.target.value };
        return q;
      }),
    });
  };

  const [count, setCount] = useState('1');

  const onClick = ({ key }) => {
    setCount(key);
    console.log(count);
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <>
      <h1>Delivery Topic</h1>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Hover me, Click menu item <DownOutlined />
        </a>
      </Dropdown>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Context Questions</h2>

        {count === '1'
          ? topic.default_questions.map((question, index) => {
              return (
                <>
                  <FormInput
                    value={question.content}
                    labelId={`Question ${index + 1}`}
                    onChange={e => handleQuestionsChange(e, index)}
                  />
                  <Button
                    onClick={() =>
                      setTopic({
                        ...topic,
                        default_questions2: topic.default_questions2.filter(
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
            })
          : null}

        {count === '2'
          ? topic.default_questions2.map((question, index) => {
              return (
                <>
                  <FormInput
                    value={question.content}
                    labelId={`Question ${index + 1}`}
                    onChange={e => handleQuestionsChange(e, index)}
                  />
                  <Button
                    onClick={() =>
                      setTopic({
                        ...topic,
                        default_questions2: topic.default_questions2.filter(
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
            })
          : null}

        {count === '3'
          ? topic.default_questions3.map((question, index) => {
              return (
                <>
                  <FormInput
                    value={question.content}
                    labelId={`Question ${index + 1}`}
                    onChange={e => handleQuestionsChange(e, index)}
                  />
                  <Button
                    onClick={() =>
                      setTopic({
                        ...topic,
                        default_questions2: topic.default_questions2.filter(
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
            })
          : null}
      </div>
      <Button
        onClick={() =>
          setTopic({
            ...topic,
            default_questions2: [...topic.default_questions, ''],
          })
        }
      >
        Add New Question
      </Button>
    </>
  );
};

export default RenderDeliveryTopicSetup;
