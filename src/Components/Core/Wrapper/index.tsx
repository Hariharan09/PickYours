import React from 'react';
import {Keyboard, Platform, TouchableWithoutFeedback} from 'react-native';
import {WrapperProps} from './interface';
import {Container, KeyboardAvoidingView} from '../../Styled';
import {color} from '../../../Theme';

function Wrapper({
  children,
  hasToolbar = false,
  margin = 20,
  variant = 'keyboard',
  ...rest
}: WrapperProps) {
  return (
    <Container flex={1} bc={color.bgColor}>
      {variant === 'keyboard' && (
        <KeyboardAvoidingView
          flex={1}
          bc={color.bgColor}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}>
          <TouchableWithoutFeedback
            accessibilityRole="button"
            onPress={Keyboard.dismiss}>
            <Container
              flex={1}
              margin={margin}
              margin-t={hasToolbar ? 5 : 0}
              {...rest}>
              {children}
            </Container>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}
      {variant === 'default' && (
        <Container
          flex={1}
          margin={margin}
          margin-t={hasToolbar ? 5 : 0}
          {...rest}>
          {children}
        </Container>
      )}

      {variant === 'list' && (
        <KeyboardAvoidingView
          flex={1}
          bc={color.bgColor}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
          <Container
            flex={1}
            margin={margin}
            margin-t={hasToolbar ? 5 : 0}
            {...rest}>
            {children}
          </Container>
        </KeyboardAvoidingView>
      )}
    </Container>
  );
}

export {Wrapper};
