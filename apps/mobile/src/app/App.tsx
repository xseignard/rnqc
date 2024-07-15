import React from 'react';
import { SafeAreaView, ScrollView, Text, StatusBar } from 'react-native';
import { encryption } from '@rnqc/encryption';
import { install } from 'react-native-quick-crypto';

install();

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView>
          <Text>{encryption()}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
