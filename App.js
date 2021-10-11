import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import EmojiBar from './components/EmojiBar';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', margin: 20}}>
        <EmojiBar />
      </View>
    </SafeAreaView>
  );
};

export default App;
