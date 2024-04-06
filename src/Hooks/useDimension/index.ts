import React, {useState} from 'react';
import {Dimensions} from 'react-native';

const useDimensions = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [layout, setLayout] = useState<{
    x: number;
    y: number;
    height: number;
    width: number;
  }>();

  const onLayout = (event: any) => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const {x, y, height, width} = event.nativeEvent.layout;
    setLayout({x, y, height, width});
  };
  return {
    width,
    height,
    layout,
    setLayout: onLayout,
  };
};

export {useDimensions};
