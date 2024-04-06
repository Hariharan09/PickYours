/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  CustomInput,
  Header,
  MultiScreenDropdown,
  MultiSelectImagePicker,
  Datepicker,
  Toast,
  Checkbox,
} from '../../../../Components/Core';
import {CommunicationStackParamList} from '@Navigators';
import {goBack} from '@Navigators/NavigationUtilities';
import {
  addEmployeeEvent,
  setRefreshEvents,
  getAssociatedCompaniesL,
  addProduct,
} from '../../../../Redux';
import {Container, ScrollView} from '../../../../Components/Styled';
import {color} from '../../../../Theme';
import {
  CREATE_EVENT_INTERNAL_RULES,
  CREATE_EVENT_EXTERNAL_RULES,
  getValidateError,
  validate,
  ifObjectExist,
  getArrayFromArrayOfObject,
  convertUrlToBase64,
  getPhotos,
} from '../../../../Utils';

import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useInput, useLoader} from '../../../../Hooks';
import {Wrapper} from '../../../../Components';
import {DemoStackParamList, navigate, NAVIGATE_TAB} from '../../../../Navigators';
import { v4 as uuidv4 } from 'uuid';

const AddProducts: FC<
  StackScreenProps<DemoStackParamList, 'add-products'>
> = () => {
  const dispatch = useDispatch();
  const {selectedEmployeeEvent} = useSelector(
    (state: any) => state.AuthReducer,
  );

  // console.log(
  //   'selectedEmployeeEvent----------------------------',
  //   selectedEmployeeEvent,
  // )

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [photo, setPhoto] = useState<any>([]);

  const loader = useLoader(false);

  // useEffect(() => {
  //   const params = {q: ''};
  //   dispatch(
  //     getAssociatedCompaniesL({
  //       params,
  //       onSuccess: (response: any) => () => {
  //         setCompaniesList(response.details);
  //       },
  //       onError: () => () => {},
  //     }),
  //   );
  // }, []);

  useEffect(() => {
    if (selectedEmployeeEvent) {
      const {title, description, brand, category, images} =
        selectedEmployeeEvent;

      async function convertAttachmentsToBase64() {
        const convertedData = await Promise.all(
          images?.map(async (item: any) => {
            try {
              item.base64 = await convertUrlToBase64(getPhotos(item));
              return {...item, uri: getPhotos(item)};
            } catch (error) {}
          }),
        );
        setPhoto(convertedData);
      }
      convertAttachmentsToBase64();

      setTitle(title);
      setBrand(brand);
      setCategory(category);
      setDescription(description);
    }
  }, []);


  const generateUniqueId = () => {
    const randomPart = Math.floor(Math.random() * 10000);
    return randomPart
  };


  function submitNewEvent() {

    const uniqueId = generateUniqueId();

    const params = {
      id: selectedEmployeeEvent?.id ? selectedEmployeeEvent?.id : uniqueId,
      title,
      description,
      brand,
      category,
      images: getArrayFromArrayOfObject(photo, 'base64'),
    };

    // console.log('params------------------', params);
    

    dispatch(addProduct(params));

    navigate(NAVIGATE_TAB['home-tab'], true);


  }

  return (
    <>
      <Header
        heading={selectedEmployeeEvent?.id ? 'Edit Products' : 'Add Products'}
      />
      <Wrapper>
        <Container flex={1} bc={color.white} border-r={10} padding={20}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Container margin-t={15}>
              <CustomInput
                heading={'Title'}
                placeholder={'enter here'!}
                value={title}
                onChangeText={setTitle}
              />
              <CustomInput
                multiline
                variant={'text-area'}
                heading={'Description'}
                placeholder={'Enter Here'!}
                value={description}
                onChangeText={setDescription}
              />
              <CustomInput
                heading={'Category'}
                placeholder={'enter here'!}
                value={category}
                onChangeText={setCategory}
              />
              <CustomInput
                heading={'Brand'}
                placeholder={'enter here'!}
                value={brand}
                onChangeText={setBrand}
              />
              <MultiSelectImagePicker
                heading={'Attachments'!}
                defaultData={photo}
                alignment={3}
                noOfPictures={2}
                onResponse={(photos: any) => {
                  setPhoto(photos);
                }}
                onDelete={(photos: any) => {
                  setPhoto(photos);
                }}
              />
            </Container>
          </ScrollView>
        </Container>
        <Container padding-t={16} bc={color.bgColor}>
          <Button
            loading={loader.loader}
            text={
              selectedEmployeeEvent?.id ? 'Update Products' : 'Add Products'
            }
            onPress={submitNewEvent}
          />
        </Container>
      </Wrapper>
    </>
  );
};

export {AddProducts};
