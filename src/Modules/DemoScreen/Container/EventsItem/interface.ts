export interface EventsItemProps {
  onPress?: () => void;
  item: any;
  onImageClick?: (index: number) => void;
  onMenuClick?: (selection: any) => void;
}
