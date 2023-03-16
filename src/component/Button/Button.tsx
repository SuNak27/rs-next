import { Button as Btn, useColorModeValue } from "@chakra-ui/react";

export interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "warning" | "danger" | "success" | "info";
}

export const Button = (props: ButtonProps) => {
  return (
    <Btn size={props.size} variant={props.variant} onClick={props.onClick}>
      {props.children}
    </Btn>
  );
}

export default Button;
