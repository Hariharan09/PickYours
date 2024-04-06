export interface MenuBarProps {
  getParams?: (handleParams: any) => void;
  menuData?: any;
  onSelectedItem?: (item: any) => void;
  isEventClosed?: boolean;
}
