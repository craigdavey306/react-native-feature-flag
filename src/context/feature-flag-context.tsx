import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { FeatureFlags } from '../types';
import { DEFAULT_FLAGS } from '../constants';

type FeatureFlagType = { [K in FeatureFlags]: boolean };

type FeatureFlagContextType = {
  flags: FeatureFlagType;
  setFlagOverride: (key: FeatureFlags, value: boolean) => void;
};

const FeatureFlagContext = createContext<FeatureFlagContextType>({
  flags: DEFAULT_FLAGS,
  setFlagOverride: () => {},
});

export const FeatureFlagProvider = ({ children }: { children: ReactNode }) => {
  // flags would come from external source
  const [flags, setFlags] = useState<FeatureFlagType>({ ...DEFAULT_FLAGS });

  /**
   * Updates the flag for a particular feature.
   * @param flag Feature to update
   * @param value New value to set for the feature
   */
  const setFlagOverride = (flag: FeatureFlags, value: boolean) => {
    setFlags((prev) => {
      return { ...prev, [flag]: value };
    });
  };

  const contextValue = useMemo(() => {
    return {
      flags,
      setFlagOverride,
    };
  }, [flags]);

  return (
    <FeatureFlagContext value={contextValue}>{children}</FeatureFlagContext>
  );
};

export const useFeatureFlags = () => {
  const ctx = useContext(FeatureFlagContext);

  /** Determines whether the Premium Chat feature is enabled or not. */
  const isEnabledPremiumChat = () => ctx.flags[FeatureFlags.PremiumChat];
  /** Determines whether the Profile feature is enabled or not. */
  const isEnabledProfilePage = () => ctx.flags[FeatureFlags.Profile];

  return {
    flags: ctx.flags,
    setFlagOverride: ctx.setFlagOverride,
    isEnabledPremiumChat,
    isEnabledProfilePage,
  };
};
