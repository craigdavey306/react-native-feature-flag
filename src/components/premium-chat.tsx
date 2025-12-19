import { Text, View, StyleSheet } from 'react-native';
import FeatureGate from './feature-gate';
import { FeatureFlags } from '../types';

const PremiumChat = (): React.JSX.Element => {
  const oldComponentDisplay: React.JSX.Element = (
    <View style={styles.container}>
      <Text>Premium Chat OLD Displays Here</Text>
    </View>
  );

  return (
    <FeatureGate flag={FeatureFlags.PremiumChat} fallback={oldComponentDisplay}>
      <View style={styles.container}>
        <Text>Premium Chat NEW Displays Here</Text>
      </View>
    </FeatureGate>
  );
};

export default PremiumChat;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
  },
});
