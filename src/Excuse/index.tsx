import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import allUserInputDataReducers from './states';
import UserListbox from '../Components/UserListbox';
import UserInput from "../Components/UserInput";

import StageOne from "./Stages/StageOne";
import StageTwo from "./Stages/StageTwo";
import StageThree from "./Stages/StageThree";
import StageFour from "./Stages/StageFour";
import StageFive from "./Stages/StageFive";
import { Provider } from 'react-redux';

// eslint-disable-next-line
const userInputDataStore = createStore(
  allUserInputDataReducers,
  composeWithDevTools(applyMiddleware(logger))
);

function excuseForm(){
  return (
    <div className="mx-auto">
      <h1 className="text-white text-2xl">Administracja TrollCraft</h1>
      <h2 className="text-white text-4xl">Usprawiedliwienia</h2>
      <Provider store={ userInputDataStore }>
        <StageOne />
        <StageTwo />
        <StageThree />
        <StageFour />
        <StageFive />
      </Provider>
    </div>
  )
};

export default excuseForm;