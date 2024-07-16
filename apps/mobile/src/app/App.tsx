import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, StatusBar } from 'react-native';
import { runFlow } from '@rnqc/encryption';
import { install } from 'react-native-quick-crypto';

install();
const type = 'AES';

export const App = () => {
  const [result, setResult] = useState<string | undefined>();
  useEffect(() => {
    const run = async () => {
      const res = await runFlow('Hello, world!', type);
      setResult(res);
    };
    run();
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView>
          <Text>{result}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
