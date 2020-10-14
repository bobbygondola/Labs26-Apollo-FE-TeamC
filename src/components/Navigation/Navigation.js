import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  toggleDisplayModal,
  toggleJoinSurveyModal,
} from '../../state/actions/displayModalAction';
import { useOktaAuth } from '@okta/okta-react';
import 'antd/dist/antd.css';

import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Navigation = props => {
  const { authService } = useOktaAuth();
  const dispatch = useDispatch();
  const toggle = e => {
    e.preventDefault();
    dispatch(toggleDisplayModal());
  };

  const openJoinSurveyModal = e => {
    e.preventDefault();
    dispatch(toggleJoinSurveyModal());
  };

  const toggleLoginLogout = () => {
    if (authService.getAuthState().isAuthenticated) {
      authService.logout();
    }
  };

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu
          style={{ display: 'flex', justifyContent: 'flex-end' }}
          theme="dark"
          mode="horizontal"
          selectable={false}
        >
          <Menu.Item
            style={{
              position: 'absolute',
              left: '0',
              fontSize: '1.6rem',
              fontFamily: 'poppins',
            }}
            key="1"
          >
            <Link style={{ color: '#fff' }} to="/">
              Apollo
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <div onClick={openJoinSurveyModal}>Join Survey</div>
          </Menu.Item>
          <Menu.Item key="3">
            <div onClick={toggle}>Add New Topic</div>
          </Menu.Item>
          <Menu.Item type="primary" onClick={toggleLoginLogout}>
            {authService.getAuthState().isAuthenticated ? 'Logout' : 'Login'}
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navigation;
