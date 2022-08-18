import * as React from 'react';
import { Text, View } from 'react-native';

import { ImagePlaceHolder } from '../atom';

const ImageWithContent = ({item}) => {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <View style={{
        marginRight: 8
      }}>
        {item.image?.url ?
          <ImagePlaceHolder source={{ uri: item.image.url, }} />
          :
          <ImagePlaceHolder source={require('../assets/Cat_Sil_Placeholder.webp')} />
        }
      </View>
      <View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text>
            Name: {' '}
          </Text>
          <Text>
            {item.name}
          </Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text>
            origin: {' '}
          </Text>
          <Text>
            {item.origin}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default ImageWithContent;