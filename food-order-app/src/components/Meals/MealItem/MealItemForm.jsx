import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmontNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmontNumber < 1 ||
      enteredAmontNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmontNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter a Valid Amount(1-5).</p>}
    </form>
  );
};

export default MealItemForm;
