import UserInput from "../../Components/UserInput";
import UserListbox, { Dataset } from '../../Components/UserListbox';
import { useDispatch, useSelector } from 'react-redux';
import { AddExcuse, UserNickname } from "../actions";
import { useState, ChangeEvent } from "react";

const StageTwo = () => {
  const dispatch = useDispatch();
  const [excuse, setValue] = useState("");
  const [nick, setNick] = useState("");

  const onUpdateExcuse = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    dispatch(AddExcuse(excuse));
  }

  const onUpdateNick = (event: ChangeEvent<HTMLInputElement>) => {
    setNick(event.target.value);
    dispatch(UserNickname(excuse));
  }

  return(
    <>
      <h3 className="text-white text-4xl">Uzupełnij dane</h3>
      <UserListbox label="Wybierz swój nick z listy:" onChange={ onUpdateNick } value={ nick } dataset="NICKNAMES"/>
      <UserListbox label="Wybierz powód zwolnienia z listy:" onChange={ onUpdateExcuse } value={ excuse } dataset="REASONS"/>
    </>
  );
}

export default StageTwo;

