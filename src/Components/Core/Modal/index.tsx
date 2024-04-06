import {Button, ImageView} from '../../Core';
import {Container, ScrollView, Text, Touchable} from '../../Styled';
import React from 'react';
import {Modal as RNModal} from 'react-native';
import {ModalProps} from './interfaces';
import {icons} from '../../../Assets';
import {color} from '../../../Theme';

const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  children,
  isPositive,
  isNegative,
  isNegativeOnChange,
  isPositiveOnChange,
  isDropDown = false,
  modifiedHeight = 0,
  loading,
  heading,
}) => {
  return (
    <RNModal
      // eslint-disable-next-line react-native/no-inline-styles
      style={{zIndex: -1}}
      visible={visible}
      transparent
      animationType="none">
      <Container
        h={'100%'}
        w={'100%'}
        padding-v={modifiedHeight}
        flex-jc={'center'}
        bc={color.backgroundColor}>
        <Container variant={'card'} margin={40} padding={20}>
          <Container flex-d={'row'} flex-jc={'space-between'}>
            <Text variant={'heading'} flex-as={'center'} text-t={'capitalize'}>
              {heading}
            </Text>
            <Touchable
              accessibilityRole="button"
              onPress={onClose}
              padding={10}>
              <ImageView
                h={15}
                w={15}
                source={icons.close}
                tint-c={color.black}
              />
            </Touchable>
          </Container>
          <ScrollView
            padding-v={isDropDown ? 0 : 20}
            showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
          <Container padding-v={isDropDown ? 0 : 10}>
            {isPositive ? (
              <Button
                text={isPositive}
                loading={loading}
                onPress={isPositiveOnChange}
              />
            ) : (
              <Container />
            )}
            {isNegative ? (
              <Container margin-t={15}>
                <Button
                  bc={color.black}
                  text={isNegative}
                  onPress={isNegativeOnChange}
                />
              </Container>
            ) : (
              <Container />
            )}
          </Container>
        </Container>
      </Container>
    </RNModal>
  );
};

export {Modal};
