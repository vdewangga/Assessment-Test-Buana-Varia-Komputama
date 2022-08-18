import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';

const LoadingBar = () => {
  return (
    <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignContent: 'center' }}>
      <ActivityIndicator size="large" color="#2596be" />
    </View>
  )
}

export default LoadingBar;