export type PrimaryButtonProps = {
  icon?: string;
  content?: React.ReactNode;
  buttonSize?: PrimaryButtonSizeEnum;
  iconSize?: PrimaryButtonSizeEnum;
  textSize?: PrimaryButtonSizeEnum;
  onClick: () => void;
};

export enum PrimaryButtonSizeEnum {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}
