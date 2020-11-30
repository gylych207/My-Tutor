import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL, config } from "./services";
import './App.css';
import Joke from "./components/Joke.jsx";
import Nav from "./components/Nav.jsx";
import { Route } from "react-router-dom";
import Form from "./components/Form.jsx"

function App() {
  const [jokes, setJokes] = useState([]);
  const [toggleFetch,setToggleFetch] = useState(false);

  useEffect(() => {
    const getJokes = async () => {
      let resp = await axios.get(baseURL, config
      );
      setJokes(resp.data.records);
    }
    getJokes();
  }, [toggleFetch]);
  
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        {jokes.map((joke) => <Joke joke={joke} key={joke.id} setToggleFetch={setToggleFetch}/>)}
      </Route>

      <Route path="/new" >
        <Form jokes={jokes} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/edit/:id" >
        <Form jokes={jokes} setToggleFetch={setToggleFetch}/>
      </Route>
      
    </div>
  );
}

export default App;
