import React, {FC, useState} from 'react';
import {Text, Container, Touchable} from '../../../Components/Styled';
import {ImagePickerProps} from './interfaces';
import ImagePicker from 'react-native-image-crop-picker';
import {Modal, ImageView} from '../../../Components/Core';
import {icons} from '../../../Assets';
import {color} from '../../../Theme';

const ImgPicker: FC<ImagePickerProps> = ({
  heading,
  defaultImage,
  type = 'both',
  front,
  crop = true,
  onResponse,
  onDeleteResponse,
  h,
  w,
  isDelete = false,
  variant = 'image-picker',
}) => {
  const [imagePickerModal, setImagePickerModal] = useState(false);

  const actionTypeHandler = () => {
    switch (type) {
      case 'camera':
        openCameraLibrary();
        break;
      case 'gallery':
        openGalleryLibrary();
        break;
      case 'both':
        openBoth();
        break;
    }
  };

  const openBoth = () => {
    setImagePickerModal(!imagePickerModal);
  };

  const getBase64FromCamera = (image: any) => {
    const imageResponse = {
      base64: image.data,
      type: image.mime,
      uri: image.path,
    };
    if (type === 'both') {
      setImagePickerModal(!imagePickerModal);
    }
    if (onResponse) {
      onResponse(imageResponse);
    }
  };

  const openCameraLibrary = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      includeBase64: true,
      useFrontCamera: front,
      cropping: crop,
    }).then((image: any) => {
      getBase64FromCamera(image);
    });
  };

  const openGalleryLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      includeBase64: true,
    }).then((image: any) => {
      getBase64FromCamera(image);
    });
  };

  return (
    <>
      {heading && (
        <Text margin-b={12} variant={'input-heading'}>
          {heading}
        </Text>
      )}
      <Touchable
        accessibilityRole="button"
        onPress={() => {
          actionTypeHandler();
        }}>
        <Container h={h} w={w} variant={variant}>
          {defaultImage && defaultImage.uri ? (
            <ImageView
              isUri
              source={defaultImage.uri}
              h={'100%'}
              w={'100%'}
              overflow={'hidden'}
            />
          ) : (
            <ImageView
              tint-c={color.GreyTint}
              source={icons.addFill}
              h={30}
              w={30}
            />
          )}
        </Container>
        {isDelete && (
          <Touchable
            accessibilityRole="button"
            position={'absolute'}
            variant={'rounded-delete'}
            onPress={onDeleteResponse}
            right={-5}
            top={-5}>
            <ImageView tint-c={color.red} source={icons.delete} h={14} w={11} />
          </Touchable>
        )}
      </Touchable>
      <Modal
        visible={imagePickerModal}
        onClose={() => {
          setImagePickerModal(!imagePickerModal);
        }}>
        <Text variant={'screen-heading'}>{'Pick Image Form'}</Text>
        <Container
          flex-d={'row'}
          flex-jc={'space-around'}
          flex-ai={'center'}
          margin-t={20}>
          <Touchable
            accessibilityRole="button"
            onPress={() => {
              openCameraLibrary();
            }}>
            <ImageView source={icons.camera} flex-as={'center'} h={25} w={25} />
            <Text>{'Camera'}</Text>
          </Touchable>
          <Touchable
            accessibilityRole="button"
            onPress={() => {
              openGalleryLibrary();
            }}>
            <ImageView
              source={icons.gallery}
              flex-as={'center'}
              h={25}
              w={25}
            />
            <Text>{'Gallery'}</Text>
          </Touchable>
        </Container>
      </Modal>
    </>
  );
};

export {ImgPicker};
