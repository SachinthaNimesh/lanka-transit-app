import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import MyComponent from './components/MyComponent';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to the Mobile App!</Text>
      <MyComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;