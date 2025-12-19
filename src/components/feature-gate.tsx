import React from 'react';
import { FeatureFlags } from '../types';
import { useFeatureFlags } from '../context';

export interface FeatureGateProps {
  flag: FeatureFlags;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const FeatureGate = ({
  flag,
  children,
  fallback = null,
}: FeatureGateProps): React.JSX.Element => {
  const { flags } = useFeatureFlags();
  return flags[flag] ? <>{children}</> : <>{fallback}</>;
};

export default FeatureGate;
