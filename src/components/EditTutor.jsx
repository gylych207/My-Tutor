import React from 'react';
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

const EditTutor = () => {
  const [name, setName] = useState("");
  const [lastName, setLast] = useState("");
  const [lessons, setLessons] = useState("");
  const [session, setSession] = useState("");
  const [price, setPrice] = useState("");
  const [about, setAbout] = useState("");
  const [img, setImg] = useState("");

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.id && props.jokes.length > 0) {
      const joke = props.jokes.find((joke) => joke.id === params.id);
      setSetup(joke.fields.setup);
      setPunchline(joke.fields.punchline);
      setAuthor(joke.fields.author);
    }
  }, [props.jokes, params.id]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // create a fields object, to send to airtable 😀
    const fields = {
      name,
      lastName,
      lessons,
      session,
      price,
      about,
      img

    };
    // make our axios request
    if (params.id) {
      const jokeURL = `${baseURL}/${params.id}`;
      await axios.put(jokeURL, { fields }, config);
    } else {
      await axios.post(baseURL, { fields }, config);
    }
    // ...what next?
    props.setToggleFetch((prev) => !prev);
    history.push("/");
  };
  return (
    <div>
      
    </div>
  );
};

export default EditTutor;