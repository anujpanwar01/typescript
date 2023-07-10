import { useDispatch, useSelector } from "react-redux";
import { ADD, DIVIDE, MULTIPLY, OPERATORS, SUBTRACT } from "../../utils/utils";
import Button from "../Button/Button";
import { OperatorContainer } from "./OperatorStyled";
import { RootState } from "../../store/store";
import {
  addition,
  division,
  multiplication,
  subtraction,
} from "../../store/CalculatorSlice/CalculatorSlice";
import { createElement } from "react";

const Operator = () => {
  const { total, current } = useSelector(
    (state: RootState) => state.calculator
  );
  const dispatch = useDispatch();
  console.log(total, current);

  const operationHandler = (operator: string) => {
    switch (operator) {
      case ADD:
        dispatch(addition(current));
        break;
      case SUBTRACT:
        dispatch(subtraction(current));
        break;
      case MULTIPLY:
        dispatch(multiplication(current));
        break;
      case DIVIDE:
        dispatch(division(current));
        break;
      default:
        break;
    }
  };

  return (
    <OperatorContainer>
      {OPERATORS.map((operator) => (
        <Button
          key={operator.text}
          className={operator.className}
          onClickHandler={operationHandler.bind(null, operator.text)}
        >
          {operator.symbol}
        </Button>
      ))}
    </OperatorContainer>
  );
};
export default Operator;
