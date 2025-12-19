import React from 'react';
import { render, screen } from '@testing-library/react-native';
import App from '../App';
import { TestSafeAreaProvider } from './utils';

test('renders correctly', async () => {
  render(
    <TestSafeAreaProvider>
      <App />
    </TestSafeAreaProvider>,
  );

  expect(screen.getByTestId('feature-title')).toBeTruthy();
});
