import React from 'react';
import './index.css';
import './App.css';
import Options from './Components/Options';
import excuseForm from './Excuse';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/excuse" component={excuseForm} />
      </Switch>
    </Router>
  )
}

const Home = () => {
  return (
    <div className="h-screen w-screen max-w-screen-2xl container mx-auto">
      <header className="flex flex-row flex-grow-0 justify-between px-10 py-5">
        <h1 className="font-sans font-bold text-white text-3xl">Panel TC</h1>
        <button className="px-6 py-2 rounded-lg bg-green-800 transition-transform transform hover:scale-90	">
          <span className="font-sans font-bold text-white">Zaloguj się</span>
        </button>
      </header>
      <div className="h-28"></div>
      <section className="flex flex-row justify-around items-center">
        <h2 className="w-min text-6xl text-white font-bold">Trollcraft Administracja</h2>
        <img className="max-w-xl w-full" src="/welcome_cats.svg" alt=""></img>
      </section>
      <div className="h-28"></div>
      <Options />
    </div>
  );
}

export default App;
