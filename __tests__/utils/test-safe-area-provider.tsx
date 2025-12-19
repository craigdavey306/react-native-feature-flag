import {
  SafeAreaProvider,
  SafeAreaProviderProps,
} from 'react-native-safe-area-context';

const mockMetrics = {
  frame: { x: 0, y: 0, width: 400, height: 800 },
  insets: { top: 20, left: 10, right: 10, bottom: 40 },
};

export function TestSafeAreaProvider({
  children,
  initialMetrics = { ...mockMetrics },
}: {
  children: React.ReactNode;
  initialMetrics?: SafeAreaProviderProps['initialMetrics'];
}) {
  return (
    <SafeAreaProvider initialMetrics={initialMetrics}>
      {children}
    </SafeAreaProvider>
  );
}
