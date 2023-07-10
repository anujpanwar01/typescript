import { ReactNode } from "react";
import * as Style from "./ButtonStyled";

const Button: React.FC<PropType> = ({
  children,
  className,
  onClickHandler,
}) => {
  return (
    <Style.Button className={className} onClick={onClickHandler}>
      {children}
    </Style.Button>
  );
};
export default Button;

type PropType = {
  children?: ReactNode;
  className: string;
  onClickHandler: () => void;
};
