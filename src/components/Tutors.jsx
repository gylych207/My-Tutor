
import React, {useState } from "react";
import { Link } from "react-router-dom";

const Tutors = (props) => {
  const [search, setSearch] = useState("");

  function searchInput(e) {
    setSearch(e.target.value);
    let filterResult = props.data.filter((tutor) =>
      tutor.fields.lessons.toLowerCase().includes(search)
    );
    console.log(filterResult);
  }

  return (
    <div className="tutorsPage">
      <div className="wallpaper">
        <input
          type="text"
          placeholder="Search"
          className="search"
          value={search}
          onChange={searchInput}
        />
        <div className='sort'>
          <button>name:A-Z</button>
          <button>name:Z-A</button>
          <button>Price:Ascending</button>
          <button>Price:Descending</button>
        </div>
      </div>
      <div className="tutorsContainer">
        {props.data &&
          props.data
            .filter((tutor) => tutor.fields.lessons.toLowerCase().includes(search))
            .map((tutor) => {
              return (
                <div className="tutorContainer">
                  <Link to="/TutorInfo">
                    <p
                      className="name"
                      onClick={(e) => {
                        if (e.target.textContent === tutor.fields.name) {
                          props.setTutorInfo(tutor.fields);
                        }
                      }}
                    >
                      {tutor.fields.name}
                    </p>
                  </Link>

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
