import React, { useEffect } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '../../../styles/login.css';

import { config } from '../../../utils/oktaConfig';

const LoginContainer = () => {
  useEffect(() => {
    const { pkce, issuer, clientId, redirectUri, scopes } = config;
    // destructure your config so that you can pass it into the required fields in your widget.
    const widget = new OktaSignIn({
      baseUrl: issuer ? issuer.split('/oauth2')[0] : '',
      clientId,
      redirectUri,
      registration: {
        // there is more we can do to handle some errors here.
      },
      features: { registration: false },
      // turning this feature on allows your widget to use Okta for user registration
      logo: './images/apollo-icon.png',
      // add your custom logo to your signing/register widget here.
      i18n: {
        en: {
          'primaryauth.title': 'Welcome to Apollo - Please sign in',
          // change title for your app
        },
      },
      authParams: {
        pkce,
        issuer,
        display: 'page',
        scopes,
      },
    });

    widget.renderEl(
      { el: '#sign-in-widget' },
      () => {
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      err => {
        throw err;
      }
    );
  }, []);

  return (
    <div
      className="loginComponent"
      style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}
    >
      <div style={{ width: '400px', marginTop: '100px' }}>
        <h2 style={{ fontSize: '30px' }}>
          <strong style={{ color: '#3389FF' }}>Apollo</strong> Reinvents
          Communication
        </h2>
        <p style={{ fontWeight: '500', fontSize: '18px' }}>
          <strong>
            We handle the way your team communicates, so you can focus on other
            things.
          </strong>
          <br />
          <br /> Let us guide your vision so you can focus on creating{' '}
          <strong style={{ color: '#3389FF' }}>Amazing</strong> products. <br />
          <br /> 1. Create a Topic and add{' '}
          <strong style={{ color: '#3389FF' }}>Context</strong> to align your
          team as one. <br />
          <br /> 2. Assign{' '}
          <strong style={{ color: '#3389FF' }}>Questions</strong> and{' '}
          <strong style={{ color: '#3389FF' }}>Frequency</strong> to automate
          conversations. <br />
          <br /> 3. Gain <strong style={{ color: '#3389FF' }}>
            Real-Time
          </strong>{' '}
          progress reports and statuses from your team.
        </p>
      </div>
      <div style={{ marginLeft: '100px' }} id="sign-in-widget" />
    </div>
  );
};

export default LoginContainer;
