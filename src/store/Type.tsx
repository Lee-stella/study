export const DUAL_LISTBOX_TYPE_ROW = 0;
export const DUAL_LISTBOX_TYPE_COL = 1;
export const DUAL_LISTBOX_CHECK_NON_SELECT = 0;
export const DUAL_LISTBOX_CHECK_FULL_SELECT = 1;
export const DUAL_LISTBOX_CHECK_SOME_SELECT = 2;
export interface DualListboxDataProps {
  name: string;
  visible: boolean;
  checkType: number;
  child: Array<DualListboxDataProps>;
}
export interface DualListboxProps {
  primaryData: Array<DualListboxDataProps>;
  secondaryData: Array<DualListboxDataProps>;
}
