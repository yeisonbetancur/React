import logo from './logo.svg';
import './App.css';
import Test from "./components/test.js";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
      <h1 className="title">Esto es, de hecho, el titulo</h1>
      <Test 
      name="Brennan Lee Mulligan"
      place="NY"
      image="brennan"
      charge="Game Master"
      company="Dimension 20"
      testament="Icarus, flying too close to the sun. But it seems Daedalus, our little master crafter over here, had some wax wings of his own, didn’t he? Wanted to see his son fall. Fall from the sky. Oh, how CLOSE TO THE SUN he flew! Well I’m NOT HAVING IT. I solved your labyrinth, puzzle master! The minotaur‘s escaped and you’re gonna get the horns, buddy! I CANNOT WIN!"
      />
      <Test
      name="Brian David Gilbert"
      place="NY"
      image="bdg"
      charge="Goblin"
      company="BDG"
      testament="My first reaction was, 'wow.' To write 300,000 words that could essentially be skipped over while still having the full Skyrim experience, it's amazing...My second reaction to this, was WHAT THE FUCK. HEY TODD, WHAT THE FUCK?" 
      />
      </div>
    </div>
  );
}

export default App;
