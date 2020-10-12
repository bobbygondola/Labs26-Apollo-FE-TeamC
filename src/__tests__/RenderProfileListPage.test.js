import React from 'react';
import ProfileListPage from '../components/pages/ProfileList/ProfileListPage';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

test('loads a profile list', () => {
  const data = [{ id: '1234', name: 'item' }];
  const { getByText } = render(
    <Router>
      <ProfileListPage data={data} />
    </Router>
  );
  const element = getByText(/item/i);
  expect(element.textContent).toBe(data[0].name);
});
