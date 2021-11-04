import UserInput from "../../Components/UserInput";
import UserListbox from '../../Components/UserListbox';

const StageTwo = () => {
  return(
    <>
      <h3 className="text-white text-4xl">Uzupełnij dane</h3>
      <UserListbox label="Wybierz swój nick z listy:"/>
      <UserInput label="Wybierz typ zwolnienia:" name="userExcuse"/>
    </>
  );
}

export default StageTwo;

