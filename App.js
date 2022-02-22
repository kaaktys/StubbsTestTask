import React from 'react';
import { Button, View } from 'react-native';
import Chat from './src/components/Chat';
import Input from './src/components/Input';

function App() {
  return (
    <View >
      <Button title="Send"/>
      {/* <Chat /> */}
      <Input />
    </View>
  );
}

export default App;

