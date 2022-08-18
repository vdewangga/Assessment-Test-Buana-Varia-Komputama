import * as React from 'react';
import { Animated } from 'react-native';

import { ImageWithContent } from '../molecule';

// image size + padding top + padding bottom + margin bottom
const ITEM_SIZE = 50 + 8 + 8 + 20

const Card = ({ item, index, scrollY }) => {
  const inputRange = [
    -1,
    0,
    ITEM_SIZE * index,
    ITEM_SIZE * (index + 2)
  ]
  const opacityInputRange = [
    -1,
    0,
    ITEM_SIZE * index,
    ITEM_SIZE * (index + 1)
  ]
  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0]
  })
  const opacity = scrollY.interpolate({
    inputRange: opacityInputRange,
    outputRange: [1, 1, 1, 0]
  })
  return (
    <Animated.View
      style={{
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        marginBottom: 20,
        opacity,
        transform: [{ scale }]
      }}
    >
      <ImageWithContent item={item} />
    </Animated.View>
  )
}

export default Card;