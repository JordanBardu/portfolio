export type PrimaryButtonProps = {
  icon?: string;
  content?: React.ReactNode;
  size?: PrimaryButtonSizeEnum;
  onClick: () => void;
};

export enum PrimaryButtonSizeEnum {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}
