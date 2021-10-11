import React from 'react';
import {View, Text} from 'react-native';
import EmojiButton from './EmojiButton';

export default function EmojiBar() {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <EmojiButton name={'Like'} />
      <EmojiButton name={'Love'} />
      <EmojiButton name={'Haha'} />
      <EmojiButton name={'Wow'} />
      <EmojiButton name={'Sad'} />
      <EmojiButton name={'Angry'} />
    </View>
  );
}
