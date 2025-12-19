module.exports = {
  preset: 'react-native',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  modulePathIgnorePatterns: [
    '<rootDir>/__tests__/utils',
    '<rootDir>/node_modules',
  ],
};
