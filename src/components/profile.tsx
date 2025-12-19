import { Text, View, StyleSheet } from 'react-native';
import FeatureGate from './feature-gate';
import { FeatureFlags } from '../types';

const Profile = (): React.JSX.Element => {
  const oldComponentDisplay: React.JSX.Element = (
    <View style={styles.container}>
      <Text>Profile OLD Displays Here</Text>
    </View>
  );

  const newComponentDisplay: React.JSX.Element = (
    <View style={styles.container}>
      <Text>Profile NEW Displays Here</Text>
    </View>
  );

  return (
    <FeatureGate
      flag={FeatureFlags.Profile}
      fallback={oldComponentDisplay}
      children={newComponentDisplay}
    />
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20,
  },
});
