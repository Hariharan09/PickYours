import {icons} from '../../../Assets';
import {goBack} from '../../../Navigators';
import {Container, Text, Touchable, ImageView} from '../../../Components';
import {color} from '../../../Theme';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {HeaderProps} from './interface';

const Header: FC<HeaderProps> = ({
  heading = 'Heading',
  profileMenu,
  variant = 'back',
  onUserPress,
  onMenuPress,
  onMenuDotButton,
}) => {
  const navigation = useNavigation();
  return (
    <>
      {variant === 'menu' && (
        <Container variant={'tool-bar'} flex-jc={'center'}>
          <Touchable
            margin-t={20}
            margin-l={23}
            accessibilityRole="button"
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}>
            <ImageView
              source={icons.menuGreen}
              h={14}
              w={17}
              tint-c={'black'}
            />
          </Touchable>

          <Touchable
            accessibilityRole="button"
            onPress={() => {
              if (onUserPress) {
                onUserPress();
              }
            }}
            flex={1}
            flex-jc={'center'}
            flex-ai={'center'}
            margin-r={20}>
            <Text variant={'toolbar-heading'}>{''}</Text>
          </Touchable>
        </Container>
      )}
      {variant === 'thread' && (
        <Container
          padding-h={18}
          flex-d={'row'}
          variant={'tool-bar'}
          flex-ai={'center'}>
          <Touchable
            padding={18}
            right={15}
            accessibilityRole="button"
            onPress={() => {
              goBack();
            }}>
            <Container>
              <ImageView
                source={icons.leftArrow}
                h={15}
                w={15}
                tint-c={color.black}
              />
            </Container>
          </Touchable>

          <Container
            flex={1}
            flex-as={'center'}
            flex-jc={'center'}
            flex-ai={'flex-start'}>
            <Text text-t={'uppercase'} letter-s={2} variant={'book'}>
              {heading}
            </Text>
          </Container>
          <Touchable
            accessibilityRole="button"
            padding={10}
            onPress={() => {
              if (onMenuDotButton) {
                onMenuDotButton();
              }
            }}>
            <ImageView
              isUri
              source={'https://cdn-icons-png.flaticon.com/128/2089/2089793.png'}
              h={15}
              w={15}
            />
          </Touchable>
        </Container>
      )}
      {variant === 'companyHeader' && (
        <Container variant={'tool-bar'}>
          <Container flex-as={'center'} flex-jc={'center'} flex-ai={'center'}>
            <Text
              margin-t={15}
              text-t={'uppercase'}
              letter-s={2}
              variant={'bold'}>
              {heading}
            </Text>
          </Container>
        </Container>
      )}

      <Container
        padding-h={15}
        flex-d={'row'}
        variant={'tool-bar'}
        flex-ai={'center'}>
        {heading && (
          <Container
            flex={1}
            flex-as={'center'}
            flex-jc={'center'}
            flex-ai={'center'}>
            <Text
              text-t={'uppercase'}
              letter-s={2}
              variant={'book'}
              line-h={18}>
              {heading}
            </Text>
          </Container>
        )}
        {profileMenu && (
          <Touchable accessibilityRole="button" onPress={onMenuPress}>
            <Container padding={10}>
              <ImageView h={20} w={20} source={icons.logOut} />
            </Container>
          </Touchable>
        )}
      </Container>
    </>
  );
};
export {Header};
