import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

	const [joke, setJoke] = useState();

	const haha = () => {
		fetch('https://api.chucknorris.io/jokes/random', {headers: {"Accept": "application/json"},})
		.then((res) => res.json())
		.then((res) => { setJoke(res.value)})
	}

	useEffect(() => {
		haha()
	}, []);

  return (
    <div className="App"> 
	  <h1>The Man The Myth The Legend</h1>
	  <p>{joke}</p>
	  <button onClick = {haha}>Hell Yeah!</button>
    </div>
  );
}

export default App;
