import React from "react";
import { Link } from "react-router-dom";
import {useState} from "react";

const TutorInfo = (props) => {
  const [number, setNumber] = useState(1)
 
 
  

  return (
    <div className="infoPage">
      <div className="imgName">
        <p className='PortfolioName'>{props.tutorInfo.name}</p>
        <img src={props.tutorInfo.img} alt="" className="portfolioImg"></img>
      </div>
      <div className="about">
        <p>{props.tutorInfo.about}</p>
        <div class="button_cont" align="center"><Link to='/Payment'><span class="example_c" target="_blank" rel="nofollow noopener" onClick={()=>props.setTotal(parseInt(number)*parseInt(props.tutorInfo.price))}>BOOK</span></Link></div>
        <div className="otherInfo">
          <p className="tutoringInfo">Subject: {props.tutorInfo.lessons}</p>
          <p className="tutoringInfo">Price: {props.tutorInfo.price}$</p>
          <p className="tutoringInfo">Session Duration: {props.tutorInfo.session}</p>
          <p className="tutoringInfo">You have {number} session</p>
          <button className='addSession' onClick={() => setNumber(number + 1)}>Add Session:</button>
          <button className='removeSession' onClick={() => number >= 1 ? setNumber(number - 1): 0}>Remove Session:</button>
          <p className='tutoringInfo'>Total Price:{parseInt(number)*parseInt(props.tutorInfo.price)}$</p>

        </div>
      </div>
    </div>
  );
};

export default TutorInfo;
