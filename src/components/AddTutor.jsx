import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { baseURL, config } from "../services";
import { useParams } from "react-router-dom";


const AddTutor = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [price, setPrice] = useState("");
  const [lessons, setLessons] = useState("");
  const [about, setAbout] = useState("");
  const [img, setImg] = useState("");
  const [session, setSession] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
      name,
      lastName,
      price,
      lessons,
      about,
      img,
      session,
    };
    console.log(data);
    await axios.post(baseURL, { fields: data }, config);
    // props.setToggleFetch((prev) => !prev);
    history.push("/tutors");
  }
  return (
    <div className="addPage">
      <div className="addTutors">
      <p>Become A Tutor With Us</p>
      <form onSubmit={handleSubmit} className='form'>
          
          <input
          placeholder="Your Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          />
               <input
          placeholder="Your LastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          />

<input
          placeholder="Price"
          type="text"
          name="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          />
          <input
          placeholder="Lessons"
          type="text"
          name="lessons"
          value={lessons}
          onChange={(e) => {
            setLessons(e.target.value);
          }}
          />
             <input
          placeholder="your image URL"
          type="text"
          name="img"
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
          />
                <input
          placeholder="Session Duration"
          type="text"
          name="session"
          value={session}
          onChange={(e) => {
            setSession(e.target.value);
          }}
          />

<input
          placeholder="About"
          type="text"
          name="about"
          value={about}
          onChange={(e) => {
            setAbout(e.target.value);
          }}
          />








          
        
        <input type="submit" value='Become A Tutor' className="become"/>
      </form>
      </div>
      </div>
  );
};

export default AddTutor;
