import UserInput from "../../Components/UserInput";

const StageOne = () => {
  return(
    <>
      <h3 className="text-white text-4xl">Adres e-mail</h3>
      <p className="text-white">Podaj swój adres e-mail, abyśmy mogli poinformować Ciebie o akceptacji lub odrzuceniu usprawiedliwienia.</p>
      <UserInput label="Adres e-mail" name="userEmail" placeholder="email@example.com"/>
    </>
  );
}

export default StageOne;