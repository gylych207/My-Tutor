import React from "react";
import {Link} from "react-router-dom";
const Nav = () => {
  return (
    <header>
      <nav>
        <ul className = 'nav_links'>
        <li><Link className="btnTutors" to='/tutors'>Tutors</Link></li>
          <li><Link className="btnAdd" to='/AddTutor'>Add Tutor</Link></li>
          <li><Link className="btnHome" to='/'>Home</Link></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
