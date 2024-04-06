import {
  KeyboardAvoidingView as View,
  KeyboardAvoidingViewProps,
} from 'react-native';
import styled from 'styled-components/native';
import {KeyboardProps} from './interfaces';

import {ShadowStyleIOS, TransformsStyle, FlexStyle, ViewStyle} from '../Css';

import {
  ShadowStyleIOS as ShadowStyleIOSProps,
  TransformsStyle as TransformsStyleProps,
  FlexStyle as FlexStyleProps,
  ViewStyle as ViewStyleProps,
} from '../Css/interfaces';

const KeyboardAvoidingView = styled(View)<
  KeyboardAvoidingViewProps &
    ShadowStyleIOSProps &
    TransformsStyleProps &
    FlexStyleProps &
    ViewStyleProps &
    KeyboardProps
>`
  ${ShadowStyleIOS}
  ${TransformsStyle}
  ${FlexStyle}
  ${ViewStyle}
`;

export {KeyboardAvoidingView};
