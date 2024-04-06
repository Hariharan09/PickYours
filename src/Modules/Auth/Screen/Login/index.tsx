import {icons} from '../../../../Assets';
import {
  Toast,
  Button,
  Container,
  CustomInput,
  ImageView,
  Text,
  Modal,
} from '../../../../Components';
import {useInput} from '../../../../Hooks';
import {
  AuthStackParamList,
  NAVIGATE_SCREEN,
  navigate,
} from '../../../../Navigators';
import {userLoginDetails, validateUser} from '../../../../Redux';
import {color} from '../../../../Theme';
import {
  getValidateError,
  save,
  USER_VALIDATE,
  validate,
} from '../../../../Utils';
import {StackScreenProps} from '@react-navigation/stack';
import {isEmpty} from 'lodash';
import React, {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const Login: FC<
  StackScreenProps<AuthStackParamList, 'login'>
> = ({}) => {
  
  const dispatch = useDispatch();
  const mobileNumber = useInput('');
  const name = useInput('');
  
  const validateUserBusinessApiHandler = () => {
    const params = {
      username: 'kminchelle',
      password: '0lelplR',
    };
   


    const validation = validate(USER_VALIDATE, params);

    if (isEmpty(validation)) {
      dispatch(
        validateUser({
          params,
          onSuccess: (response: any) => () => {
            console.log('res---------------', response);
            dispatch(userLoginDetails(true));
            save('token', response.details.token);
            navigate(NAVIGATE_SCREEN.splash, true);
            // navigate(NAVIGATE_TAB['home-tab'], true);
          },
          onError: (error: any) => () => {
            console.log('error---------', error);
            dispatch(userLoginDetails(true));
            save('token', error.token);
            navigate(NAVIGATE_SCREEN.splash, true);
            // navigate(NAVIGATE_TAB['home-tab'], true);
          },
        }),
      );
    } else {
      Toast(getValidateError(validation));
    }
  };

  return (
    <>
      <Container flex-jc={'center'} variant={'screen-gray'}>
        <Container bc={color.white} border-r={10} padding-v={15}>
          <Container flex-ai={'center'} flex-jc={'center'} margin-t={20}>
            <ImageView source={icons.logo} h={110} w={100} />
          </Container>
          <Container flex-ai={'center'} flex-jc={'center'} margin-t={20}>
            <Text font-size={22} variant={'light'} margin-b={3} letter-s={1}>
              {'Pick Yours'}
            </Text>
            <Text font-size={12} variant={'light'} margin-t={5}>
              {'Trust in our Best'}
            </Text>
          </Container>
          <Container margin-h={30} margin-t={60} margin-b={10}>
            <CustomInput
              type={'default'}
              heading={'User Name'}
              placeholder={'name'}
              onChangeText={mobileNumber.onChange}
            />
            <CustomInput
              type={'default'}
              heading={'Password'}
              placeholder={'password'}
              onChangeText={name.onChange}
            />
          </Container>
        </Container>
        <Container padding-t={20}>
          <Button
            variant={'primary'}
            text={'submit'}
            onPress={validateUserBusinessApiHandler}
          />
        </Container>
      </Container>
    </>
  );
};
