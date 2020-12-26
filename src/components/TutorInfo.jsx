import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { baseURL, config } from "../services/index.js";
const TutorInfo = (props) => {
  const [number, setNumber] = useState(1)
  let history = useHistory();
  
  const handleDelete = async () => {
    const tutorUrl = `${baseURL}/${props.tutorInfo.id}`;
    await axios.delete(tutorUrl, config);
    history.push("/");
  };

  

  return (
    <div className="infoPage">
      <div className="imgName">
        <p className='PortfolioName'>{props.tutorInfo.fields.name}</p>
        <img src={props.tutorInfo.fields.img} alt="" className="portfolioImg"></img>
        <div className='crud'>
          <input type='text' value='Edit'/>
          <input type='text' value='Delete' onClick={handleDelete}/>
        </div>
      </div>
      <div className="about">
        <div className='aboutMe'>
        <p>{props.tutorInfo.fields.about}</p>
       </div>
        <div className="button_cont" align="center"><Link to='/Payment'><span className="example_c" target="_blank" rel="nofollow noopener" onClick={()=>props.setTotal(parseInt(number)*parseInt(props.tutorInfo.fields.price))}>BOOK</span></Link></div>
        <div className="otherInfo">
          <p className="tutoringInfo">Subject: {props.tutorInfo.fields.lessons}</p>
          <p className="tutoringInfo">Price: {props.tutorInfo.fields.price}$</p>
          <p className="tutoringInfo">Session Duration: {props.tutorInfo.fields.session}</p>
          <p className="tutoringInfo">You have {number} session</p>
          <button className='addSession' onClick={() => setNumber(number + 1)}>Add Session:</button>
          <button className='removeSession' onClick={() => number >= 1 ? setNumber(number - 1): 0}>Remove Session:</button>
          <p className='tutoringInfo'>Total Price:{parseInt(number)*parseInt(props.tutorInfo.fields.price)}$</p>

        </div>
      </div>
    </div>
  );
};

export default TutorInfo;
