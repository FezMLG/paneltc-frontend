import { useState, ChangeEvent } from "react";
import UserInput from "../../Components/UserInput";
import { useDispatch } from 'react-redux';
import { UserNickname } from "../actions";


const StageOne = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const onUpdateEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    dispatch(UserNickname( email ));
  }

  return(
    <>
      <h3 className="text-white text-4xl">Adres e-mail</h3>
      <p className="text-white">Podaj swój adres e-mail, abyśmy mogli poinformować Ciebie o akceptacji lub odrzuceniu usprawiedliwienia.</p>
      <UserInput label="Adres e-mail" name="userEmail" placeholder="email@example.com" onChange={ onUpdateEmail } value={ email }/>
    </>
  );
}

export default StageOne;