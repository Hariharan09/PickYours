import {
  FlexStyle as FlexStyleProps,
  ViewStyle as ViewStyleProps,
} from '../../Styled/Css/interfaces';

export interface WrapperProps extends ViewStyleProps, FlexStyleProps {
  children: React.ReactNode;
  hasToolbar?: boolean;
  variant?: 'keyboard' | 'default' | 'list';
}
