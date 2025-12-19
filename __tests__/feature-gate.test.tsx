import React from 'react';
import { Text } from 'react-native';
import { render, screen } from '@testing-library/react-native';
import { TestSafeAreaProvider } from './utils';
import { FeatureGate } from '../src/components';
import { useFeatureFlags } from '../src/context';
import { FeatureFlags } from '../src/types';

jest.mock('../src/context');

describe('FeatureGate Component', () => {
  it('renders children when the flag is true', () => {
    (useFeatureFlags as jest.Mock).mockReturnValue({
      flags: { [FeatureFlags.Profile]: true },
    });
    const expectedText = 'Profile NEW';

    render(
      <TestSafeAreaProvider>
        <FeatureGate flag={FeatureFlags.Profile}>
          <Text>{expectedText}</Text>
        </FeatureGate>
      </TestSafeAreaProvider>,
    );

    expect(screen.getByText(expectedText)).toBeTruthy();
  });

  it('renders fallback (or nothing) when flag is false', () => {
    (useFeatureFlags as jest.Mock).mockReturnValue({
      flags: { [FeatureFlags.Profile]: false },
    });
    const expectedText = 'Profile OLD';

    render(
      <TestSafeAreaProvider>
        <FeatureGate
          flag={FeatureFlags.Profile}
          fallback={<Text>{expectedText}</Text>}
        >
          <Text>Profile NEW</Text>
        </FeatureGate>
      </TestSafeAreaProvider>,
    );

    expect(screen.queryByText('Profile NEW')).toBeNull();
    expect(screen.getByText(expectedText)).toBeTruthy();
  });
});
