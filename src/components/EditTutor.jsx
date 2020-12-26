import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

const EditTutor = (props) => {
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [lessons, setLessons] = useState(null);
  const [session, setSession] = useState(null);
  const [price, setPrice] = useState(null);
  const [about, setAbout] = useState(null);
  const [img, setImg] = useState(null);

  const params = useParams();
  const history = useHistory();
  
  useEffect(() => {
    if (params.id && props.data.length > 0) {
      const tutor = props.data.find((tutor) => tutor.id === params.id);
      setName(tutor.fields.name);
      setLastName(tutor.fields.lastName);
      setLessons(tutor.fields.lessons);
      setSession(tutor.fields.sessions);
      setPrice(tutor.fields.price);
      setAbout(tutor.fields.about);
      setImg(tutor.fields.img);
    }
  }, [props.data, params.id]);
  
  
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
  
    }
    if (params.id) {
      const tutorUrl = `${baseURL}/${params.id}`;
      await axios.put(tutorUrl, { fields }, config);
    } else {
      await axios.post(baseURL, { fields }, config);
    }
    history.push("/Tutors");
  };

  // ...what next?
  // props.setToggleFetch((prev) => !prev);
  // history.push("/tutors");

  return (
    <div className="addPage">
    <div className="addTutors">
      <p>Become A Tutor With Us</p>
      <form onSubmit={handleSubmit} className="form">
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

        <input type="submit" value="Update" className="become" />
      </form>
    </div>
  </div>
  )
};
 


export default EditTutor;
// import React from 'react';
// import { useEffect, useState } from "react";
// import { useHistory, useParams } from "react-router-dom";
// import axios from "axios";
// import { baseURL, config } from "../services";

// const EditTutor = () => {
//   const [name, setName] = useState("");
//   const [lastName, setLast] = useState("");
//   const [lessons, setLessons] = useState("");
//   const [session, setSession] = useState("");
//   const [price, setPrice] = useState("");
//   const [about, setAbout] = useState("");
//   const [img, setImg] = useState("");

//   const history = useHistory();
//   const params = useParams();

//   useEffect(() => {
//     if (params.id && props.jokes.length > 0) {
//       const joke = props.jokes.find((joke) => joke.id === params.id);
//       setSetup(joke.fields.setup);
//       setPunchline(joke.fields.punchline);
//       setAuthor(joke.fields.author);
//     }
//   }, [props.jokes, params.id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // create a fields object, to send to airtable 😀
//     const fields = {
//       name,
//       lastName,
//       lessons,
//       session,
//       price,
//       about,
//       img

//     };
//     // make our axios request
//     if (params.id) {
//       const jokeURL = `${baseURL}/${params.id}`;
//       await axios.put(jokeURL, { fields }, config);
//     } else {
//       await axios.post(baseURL, { fields }, config);
//     }
//     // ...what next?
//     props.setToggleFetch((prev) => !prev);
//     history.push("/");
//   };
//   return (
//     <div>

//     </div>
//   );
// };

// export default EditTutor;
