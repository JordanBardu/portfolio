import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type PrimaryButtonProps = {
  icon?: IconDefinition;
  content?: React.ReactNode;
  buttonSize?: PrimaryButtonSizeEnum;
  iconSize?: PrimaryButtonSizeEnum;
  textSize?: PrimaryButtonSizeEnum;
  onClick: () => void;
};

export const PrimaryButtonSizeEnum = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export type PrimaryButtonSizeEnum =
  (typeof PrimaryButtonSizeEnum)[keyof typeof PrimaryButtonSizeEnum];
