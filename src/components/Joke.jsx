import axios from 'axios';
import { baseURL, config } from "../services"
import { Link} from "react-router-dom"

function Jokes(props) {
  const handleDelete = async () => {
    const jokeURL = `${baseURL}/${props.joke.id}`   /// we change the actual url to delete. 
    await axios.delete(jokeURL, config);
    props.setToggleFetch((prev) => !prev);
  }
  return (
    <div>
      <p>{props.joke.fields.setup}</p>
      <em>
        <p>{props.joke.fields.punchline}</p>
      </em>
      <strong>
        <p>{props.joke.fields.author}</p>
      </strong>
      <Link to={`/edit/${props.joke.id}`}><button>FICX MEE</button></Link>
      <button onClick={handleDelete}>YETTTT</button>
    </div>
  );
}

export default Jokes;
