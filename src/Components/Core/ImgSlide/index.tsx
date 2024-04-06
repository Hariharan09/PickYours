import React, {FC} from 'react';
import {ImgSlideProps} from './interfaces';
import ImageView from 'react-native-image-viewing';
const ImgSlide: FC<ImgSlideProps> = ({
  currentIndex,
  defaultImages,
  openImg,
  onRequestClose,
}) => {
  return (
    <>
      <ImageView
        images={defaultImages}
        imageIndex={currentIndex}
        visible={openImg}
        onRequestClose={onRequestClose}
      />
    </>
  );
};

export {ImgSlide};
