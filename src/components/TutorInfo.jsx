import React from "react";
import { Link } from "react-router-dom";

const TutorInfo = (props) => {
  // console.log(props.tutorInfo)
  return (
    <div className="infoPage">
      <div className="imgName">
        <p className='PortfolioName'>{props.tutorInfo.name}</p>
        <img src={props.tutorInfo.img} alt="" className="portfolioImg"></img>
      </div>
      <div className="about">
        <p>{props.tutorInfo.about}</p>
        <div class="button_cont" align="center"><Link to='/Payment'><span class="example_c" target="_blank" rel="nofollow noopener">BOOK</span></Link></div>
        <div className="otherInfo">
          <p className="subject">Subject: {props.tutorInfo.lessons}</p>
          <p className="price">Price: {props.tutorInfo.price}</p>
          <p className="session">Session Duration: {props.tutorInfo.session}</p>

        </div>
      </div>
    </div>
  );
};

export default TutorInfo;
