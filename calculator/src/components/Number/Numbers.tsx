import { useDispatch } from "react-redux";
import { BUTTONS_NUMBER } from "../../utils/utils";
import Button from "../Button/Button";
import { NumberContainer } from "./NumberStyled";
import { currentNumber } from "../../store/CalculatorSlice/CalculatorSlice";

const Numbers: React.FC = () => {
  const dispatch = useDispatch();
  const onClickHandler = (number: string) => {
    dispatch(currentNumber(number));
  };
  return (
    <NumberContainer>
      {BUTTONS_NUMBER.map((number) => (
        <Button
          key={number.text}
          className={number.className}
          onClickHandler={onClickHandler.bind(null, number.text)}
        >
          {number.text}
        </Button>
      ))}
    </NumberContainer>
  );
};
export default Numbers;
