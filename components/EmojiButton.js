import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import Like from '../assets/like.svg';
import Love from '../assets/love.svg';
import Angry from '../assets/angry.svg';
import Haha from '../assets/haha.svg';
import Sad from '../assets/sad.svg';
import Wow from '../assets/wow.svg';

export default function EmojiButton(props) {
  const [animation, setAnimation] = useState(new Animated.Value(1));
  const renderEmoji = name => {
    switch (name) {
      case 'Like':
        return (
          <Animated.View style={[styles.container, animatedStyles]}>
            <Like width={30} height={30} />
            <Text style={styles.emojiName}>{name}</Text>
          </Animated.View>
        );
      case 'Love':
        return (
          <Animated.View style={[styles.container, animatedStyles]}>
            <Love width={30} height={30} />
            <Text style={styles.emojiName}>{name}</Text>
          </Animated.View>
        );
      case 'Haha':
        return (
          <Animated.View style={[styles.container, animatedStyles]}>
            <Haha width={30} height={30} />
            <Text style={styles.emojiName}>{name}</Text>
          </Animated.View>
        );
      case 'Wow':
        return (
          <Animated.View style={[styles.container, animatedStyles]}>
            <Wow width={30} height={30} />
            <Text style={styles.emojiName}>{name}</Text>
          </Animated.View>
        );
      case 'Sad':
        return (
          <Animated.View style={[styles.container, animatedStyles]}>
            <Sad width={30} height={30} />
            <Text style={styles.emojiName}>{name}</Text>
          </Animated.View>
        );
      case 'Angry':
        return (
          <Animated.View style={[styles.container, animatedStyles]}>
            <Angry width={30} height={30} />
            <Text style={styles.emojiName}>{name}</Text>
          </Animated.View>
        );
    }
  };

  const animatedStyles = {
    transform: [
      {
        scaleX: animation,
      },
      {
        scaleY: animation,
      },
    ],
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1.5,
      duration: 500,
      useNativeDriver: true,
    }).start(() => rollBack());
  };

  const rollBack = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={() => {
        startAnimation();
      }}>
      {renderEmoji(props.name)}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiName: {
    marginTop: 8,
    fontSize: 8,
    color: '#BFBFC2',
  },
});
