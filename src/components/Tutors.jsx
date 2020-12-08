import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL, config } from "../services";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TutorInfo from "./TutorInfo";
import { useHistory } from "react-router-dom";

const Tutors = (props) => {
  let { id } = useParams();
  const [tutor, setTutor] = useState("");
  // api call for a single item
  // useEffect(() => {
  //   let getData = async () => {
  //     let response = await axios.get(`${baseURL}/${id}`, config);
  //     setTutor(response.data);
  //     console.log('tutor',response.data);
  //   };
  //   getData();
  // }, []);

  return (
    <div className="tutorsPage">
      <div className="wallpaper">
        <input type="text" placeholder="Search" className="search" />
      </div>
      <div className="tutorsContainer">
        {props.data &&
          props.data.map((tutor) => {
            return (
              <div className="tutorContainer">
               <Link to="/TutorInfo"><p className="name" onClick={(e) => {
                  if (e.target.textContent === tutor.fields.name) {
                    props.setTutorInfo(tutor.fields);
                    
                  
                  }
                
                  
                }}>{tutor.fields.name}</p></Link>

                <img src={tutor.fields.img} alt="" className="image"></img>
                <p className="price">$ {tutor.fields.price}</p>
               
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Tutors;
