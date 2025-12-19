/**
 * Example of a feature flag implementation for a React Native application.
 *
 */

import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Switch,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { FeatureFlagProvider, useFeatureFlags } from './src/context';
import { Profile, PremiumChat } from './src/components';
import { toTitleCase, replaceDelimiter } from './src/utils';
import { FeatureFlags } from './src/types';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppRoot />
    </SafeAreaProvider>
  );
};

function AppRoot() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: safeAreaInsets.top,
          paddingBottom: safeAreaInsets.bottom,
          paddingLeft: safeAreaInsets.left,
          paddingRight: safeAreaInsets.right,
        },
      ]}
    >
      <FeatureFlagProvider>
        <AppComponent />
      </FeatureFlagProvider>
    </View>
  );
}

function AppComponent() {
  const { flags, setFlagOverride } = useFeatureFlags();

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Example of Feature Switches</Text>
      </View>
      {Object.entries(flags).map(([flag, isEnabled]) => {
        const title = toTitleCase(replaceDelimiter(flag, '_', ' '));

        return (
          <View style={styles.switchContainer} key={flag}>
            <Text>{title}</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#3e3e' }}
              thumbColor={'#f4f3f4'}
              onValueChange={() =>
                setFlagOverride(flag as FeatureFlags, !isEnabled)
              }
              value={isEnabled}
            />
          </View>
        );
      })}
      <PremiumChat />
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 200,
    width: '90%',
    paddingBottom: 10,
  },
  switchRow: {
    flexDirection: 'row',
  },
  titleContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;
