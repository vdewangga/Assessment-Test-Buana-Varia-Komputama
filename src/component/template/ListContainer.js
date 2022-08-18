import * as React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const ListContainer = ({ children }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Image
        source={require('../assets/catbg.jpeg')}
        style={StyleSheet.absoluteFillObject}
        blurRadius={10}
      />
      {children}
    </View>
  )
}

export default ListContainer;