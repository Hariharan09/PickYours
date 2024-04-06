/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {Container, FlatList, Text} from '../../../Components/Styled';
import {MultiSelectImagePickerProps} from './interfaces';
import {ImgPicker, Toast} from '../../../Components/Core';

const MultiSelectImagePicker: React.FC<MultiSelectImagePickerProps> = ({
  heading,
  defaultData,
  alignment,
  noOfPictures = 3,
  onResponse,
  onDelete,
}) => {
  const [photo, setPhoto] = useState<any>(defaultData);  

  function addPhotoHandler(response: any) {
    if (photo.length < noOfPictures) {
      let updatedPhoto = [...photo];
      updatedPhoto = [...updatedPhoto, response];
      setPhoto(updatedPhoto);
      if (onResponse) {
        onResponse(updatedPhoto);
      }
    } else {
      Toast('only send minimum   ' + noOfPictures + '  pictures');
    }
  }

  React.useEffect(() => {
    setPhoto(defaultData);
  }, [defaultData]);

  function deletePhotoHandler(index: number) {
    const updatedPhoto = [...photo];
    updatedPhoto.splice(index, 1);
    setPhoto(updatedPhoto);
    if (onDelete) {
      onDelete(updatedPhoto);
    }
  }

  return (
    <Container padding-b={10}>
      {heading && (
        <Text variant={'input-heading'} margin-b={12}>
          {heading}
        </Text>
      )}
      <Container flex-w={'wrap'}>
        <FlatList
          numColumns={alignment}
          data={[...photo, {}]}
          renderItem={({item, index}: {item: any; index: number}) => (
            <Container padding={5}>
              <ImgPicker
                isDelete={[...photo, {}].length - 1 === index ? false : true}
                h={80}
                w={80}
                defaultImage={item}
                onResponse={(response: any) => {
                  addPhotoHandler(response);
                }}
                onDeleteResponse={() => {
                  deletePhotoHandler(index);
                }}
              />
            </Container>
          )}
          keyExtractor={(item: any) => item.id + ''}
        />
      </Container>
    </Container>
  );
};

export {MultiSelectImagePicker};
