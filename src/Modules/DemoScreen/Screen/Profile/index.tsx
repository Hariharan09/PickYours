import {
  Container,
  Header,
  ImageView,
  Modal,
  Text,
  Wrapper,
} from '../../../../Components';
import React from 'react';
import {color} from '../../../../Theme';
import {useModal} from '../../../../Hooks';
import {useDispatch, useSelector} from 'react-redux';
import {userLogout} from '../../../../Redux';
import {resetRoot} from '../../../../Navigators';
import {getPhotos} from '../../../../Utils';
const Profile: React.FC<{}> = ({}) => {
  const dispatch = useDispatch();
  const {validateUser} = useSelector((state: any) => state.AuthReducer);
  console.log('validateUser---------', validateUser);

  const logoutModal = useModal(false);

  function logoutHandler() {
    dispatch(
      userLogout({
        onSuccess: () => {
          setTimeout(() => {
            resetRoot({
              index: 0,
              routes: [{name: 'auth-stack'} as never],
            });
          }, 100);
        },
        onError: () => {},
      }),
    );
  }

  return (
    <>
      <Header heading={'Profile'} profileMenu onMenuPress={logoutModal.show} />
      <Container flex={1} padding={20} bc={color.bgColor}>
        <Container variant={'card'}>
          <Container flex-as={'center'}>
            <ImageView
              h={100}
              w={100}
              source={getPhotos(validateUser?.image)}
              isUri
            />
            <Text
              margin-t={10}
              variant={'heading'}
              font-size={14}
              margin-l={10}>
              {validateUser?.username}
            </Text>
          </Container>
          <Container
            margin-t={20}
            flex-as={'center'}
            flex-jc={'center'}
            flex-d={'row'}>
            <Container>
              <Text
                variant={'medium'}
                font-size={17}
                margin-t={15}
                text-t={'capitalize'}>
                {'Name'}
              </Text>
              <Text
                variant={'medium'}
                font-size={17}
                margin-t={15}
                text-t={'capitalize'}>
                {'e-mail'}
              </Text>
              <Text
                variant={'medium'}
                font-size={17}
                margin-t={15}
                text-t={'capitalize'}>
                {'gender'}
              </Text>
            </Container>
            <Container margin-l={20}>
              <Text
                variant={'medium'}
                font-size={17}
                margin-t={15}
                text-t={'capitalize'}>
                {':'}
              </Text>
              <Text
                variant={'medium'}
                font-size={17}
                margin-t={15}
                text-t={'capitalize'}>
                {':'}
              </Text>
              <Text
                variant={'medium'}
                font-size={17}
                margin-t={15}
                text-t={'capitalize'}>
                {':'}
              </Text>
            </Container>
            <Container margin-l={20}>
              <Text
                variant={'medium'}
                font-size={17}
                margin-t={15}
                text-t={'capitalize'}>
                {validateUser?.firstName} {validateUser?.lastName}
              </Text>
              <Text
                variant={'medium'}
                font-size={17}
                margin-t={15}
                text-t={'capitalize'}>
                {validateUser?.email}
              </Text>
              <Text
                variant={'bold'}
                font-size={17}
                margin-t={15}
                text-t={'capitalize'}>
                {validateUser?.gender}
              </Text>
            </Container>
          </Container>
        </Container>
      </Container>
      <Modal
        visible={logoutModal.visible}
        isNegative={'No'}
        isPositive={'Yes'}
        isPositiveOnChange={() => {
          logoutModal.hide();
          logoutHandler();
        }}
        isNegativeOnChange={logoutModal.hide}
        onClose={logoutModal.hide}>
        <Container flex-ai={'center'}>
          <Text variant={'heading'}>{'Do u want Logout ?'}</Text>
        </Container>
      </Modal>
    </>
  );
};

export {Profile};
