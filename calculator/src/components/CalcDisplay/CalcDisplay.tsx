import { useSelector } from "react-redux";
import { Display } from "./CalcDisplayStyled";
import { RootState } from "../../store/store";

const CalcDisplay: React.FC = () => {
  const { total, current } = useSelector(
    (state: RootState) => state.calculator
  );

  const onChangeHandler = (e: React.FormEvent) => {
    e.stopPropagation();
  };

  return <Display value={total} onChange={onChangeHandler} />;
};
export default CalcDisplay;
