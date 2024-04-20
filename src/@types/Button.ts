export type ButtonProps = {
  text: string;
  type?: "default" | "text";
  isDisabled?: boolean;
  onClick?: () => void;
};
