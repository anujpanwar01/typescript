import { ReactNode, ReactSVGElement } from "react";
import { DivideIcon, MultiplyIcon, PlusIcon, SubtractIcon } from "./svg";

export const ADD = "add";
export const MULTIPLY = "multiply";
export const SUBTRACT = "subtract";
export const DIVIDE = "divide";

export const OPERATORS: OperatorType[] = [
  {
    symbol: <DivideIcon />,
    text: DIVIDE,
    className: "operator__button",
  },
  {
    symbol: <MultiplyIcon />,
    text: MULTIPLY,
    className: "operator__button",
  },
  {
    symbol: <SubtractIcon />,
    text: SUBTRACT,
    className: "operator__button",
  },
  {
    symbol: <PlusIcon />,
    text: ADD,
    className: "operator__button",
  },
];

export const BUTTONS_NUMBER: CommonType[] = [
  { text: "7", className: "calculator__number--1" },
  { text: "8", className: "calculator__number--1" },
  { text: "9", className: "calculator__number--1" },
  { text: "4", className: "calculator__number--1" },
  { text: "5", className: "calculator__number--1" },
  { text: "6", className: "calculator__number--1" },
  { text: "1", className: "calculator__number--1" },
  { text: "2", className: "calculator__number--1" },
  { text: "3", className: "calculator__number--1" },
  { text: "0", className: "calculator__number--2" },
  { text: ".", className: "calculator__number--1" },
];

interface CommonType {
  text: string;
  className: string;
}
interface OperatorType extends CommonType {
  symbol: ReactNode;
}
