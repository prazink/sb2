import type { ButtonSaveTypeEnum } from '../enums/buttons.enum'

export type ButtonDefaultProps = {
  tag: string;
  inverted: boolean;
  bold: boolean;
  disabled: boolean;
  variant: string;
  size?: string;
  to?: string|null;
  dataIdentifier?: string;
  isAnimated?: boolean;
  target?: string;
}

export type ButtonEnabledStyleProps = {
  [n: string]: string | boolean;
}

export type ButtonSaveProps = {
  readonly id: string;
  label: string;
  active: boolean;
  type: string | ButtonSaveTypeEnum;
}
