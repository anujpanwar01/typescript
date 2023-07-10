import CalcDisplay from "../components/CalcDisplay/CalcDisplay";
import Numbers from "../components/Number/Numbers";
import Operator from "../components/Operator/Operator";
import { ActionButton, CalculatorContainer } from "./CalculatorStyled";

const Calculator: React.FC = (props) => {
  return (
    <CalculatorContainer>
      <CalcDisplay />
      <ActionButton>
        <Operator />
        <Numbers />
      </ActionButton>
    </CalculatorContainer>
  );
};
export default Calculator;
