import UserInput from "../../Components/UserInput";
import { useDispatch, useSelector } from 'react-redux';
import { AddExcuse } from "../actions";
import { userExcuseState } from "../states/userExcuse";
import { useState, ChangeEvent } from "react";

const StageThree = () => {
  const excuseType = useSelector<userExcuseState, userExcuseState["excuse"]>( (state) => state.excuse);
  const dispatch = useDispatch();
  const [excuse, setValue] = useState("");

  const onUpdateExcuse = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    dispatch(AddExcuse(excuse));
    console.log(excuse);
  }

  return(
    <>
      <h3 className="text-white text-4xl">Data</h3>
      <p className="text-white">
        Wybierz od kiedy i do kiedy chcesz otrzymać zwolnienie.
      </p>
      <p className="text-white">
        Nie zgłaszamy zwolnień poniżej 2 dni włącznie! Zwolnienia wstecz nie będą uznawane!
      </p>
      <input
        type='text'
        onChange={ onUpdateExcuse }
        value={ excuse }
      />
      <p>{ excuse }</p>
      {/* <UserInput label="Podaj początek zwolnienia" type="date" name="beginningDate" change={ () => dispatch(AddExcuse()) }/> */}
      <UserInput label="Podaj początek zwolnienia" type="date" name="beginningDate" />
      <UserInput label="Podaj koniec zwolnienia" type="date" name="endDate"/>
    </>
  );
}

export default StageThree;

