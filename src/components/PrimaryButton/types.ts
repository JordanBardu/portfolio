export type PrimaryButtonProps = {
  icon?: string;
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
