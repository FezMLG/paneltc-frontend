import UserInput from "../../Components/UserInput";
import UserListbox from '../../Components/UserListbox';

const StageThree = () => {
  return(
    <>
      <h3 className="text-white text-4xl">Data</h3>
      <p className="text-white">
        Wybierz od kiedy i do kiedy chcesz otrzymać zwolnienie.
      </p>
      <p className="text-white">
        Nie zgłaszamy zwolnień poniżej 2 dni włącznie! Zwolnienia wstecz nie będą uznawane!
      </p>
    </>
  );
}

export default StageThree;

