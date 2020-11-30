import { useParams , useHistory} from "react-router-dom";
import { useState, useEffect} from 'react';
import axios from "axios";
import { baseURL, config } from "../services";

function Form(props) {
  const [setup, setSetup] = useState('');
  const [punchline,setPunchline] = useState('');
  const [author, setAuthor] = useState('');

  const history = useHistory();
  const params = useParams(); //return value is Object;

  useEffect(() => {
    if (props.id && props.jokes.length > 0) {
      const joke = props.jokes.find((joke) => joke.id === params.id)
      setSetup(joke.fields.setSetup)
      setPunchline(joke.fields.punchline)
      setAuthor(joke.fields.author)
    }
   
  }, [props.jokes, params.id]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // create a field object to send airtable
    const fields = {
      setup,
      punchline,
      author
    }

    if (params.id) {
      const jokeURL = `${baseURL}/${params.id}`;
      await axios.put(jokeURL, { fields }, config);
    }
    else {
      await axios.post(baseURL, { fields }, config);
    }
   
    props.setToggleFetch((prev) => !prev);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="setup">Setup</label>
      <input name="setup" type='text' value={setup} onChange={(e)=>setSetup(e.target.value)}/>
      <label htmlFor="punchline">Punchline</label>
      <input name="punchline" type="text" value={punchline} onChange={(e)=>setPunchline(e.target.value)}/>
      <label htmlFor="author">author</label>
      <input name="author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type='submit'>HAHAHAH</button>
    </form>
   
  );
}

export default Form;