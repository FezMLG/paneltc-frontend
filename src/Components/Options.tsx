import OptionBox from "./OptionBox";
import { CalendarIcon, ExclamationIcon } from '@heroicons/react/solid';

const Calendar = <CalendarIcon className='h-10 w-10 text-white'/>;
const Error = <ExclamationIcon className='h-10 w-10 text-white'/>;

const Options = () => {
  return (
    <section className="container mx-auto flex flex-row flex-wrap justify-around max-w-7xl">
      <OptionBox icon={Calendar} title="Usprawiedliwienia" btnTxt="Przejdź" path="/excuse"/>
      <OptionBox icon={Error} title="Zgłaszanie Błędów" btnTxt="Przejdź" path="/"/>
    </section>
  )
};

export default Options;