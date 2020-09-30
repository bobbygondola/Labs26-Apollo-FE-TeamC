import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleDisplayModal } from '../../state/actions/displayModalAction';
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const Navigation = props => {
  const { toggleDisplayModal } = props;
  const toggle = e => {
    e.preventDefault();
    toggleDisplayModal();
  };
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />

        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link to="/">Apollo</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/join-survey">Join Survey</Link>
          </Menu.Item>
          <Menu.Item key="3">
            {' '}
            {/* <Link to="/new-topic"> */}
            <div onClick={toggle}>Add New Topic</div>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      ></Content>
      <Footer style={{ textAlign: 'center' }}></Footer>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    displayModal: state.displayModal,
  };
};

export default connect(mapStateToProps, { toggleDisplayModal })(Navigation);
