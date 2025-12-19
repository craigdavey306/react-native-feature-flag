import { FeatureFlags } from './types';

export const DEFAULT_FLAGS: { [K in FeatureFlags]: boolean } = {
  [FeatureFlags.PremiumChat]: false,
  [FeatureFlags.Profile]: false,
};
