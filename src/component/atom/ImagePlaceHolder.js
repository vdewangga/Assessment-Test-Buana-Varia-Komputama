import * as React from 'react';
import { Image } from 'react-native';

const ImagePlaceHolder = ({source}) => {
  return (
    <Image
      style={{
        width: 50,
        height: 50,
        borderRadius: 15,
      }}
      source={source}
    />
  )
}

export default ImagePlaceHolder;