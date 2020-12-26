import React, { useState } from "react";
import { Link } from "react-router-dom";

const Tutors = (props) => {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");


  function searchInput(e) {
    setSearch(e.target.value);
    let filterResult = props.data.filter((tutor) =>
      tutor.fields.lessons.toLowerCase().includes(search)
    );
 
  }
  function Select(e) {
    setValue(e.target.value)
    if (e.target.value === 'low-high') {
      props.setData(props.data.sort(function (a, b) {
        return a.fields.price - b.fields.price;
      }))
    }
    if (e.target.value === "high-low") {
      props.setData(
        props.data.sort(function (a, b) {
          return b.fields.price - a.fields.price;
        })
      );
    }
    if (e.target.value === "A-Z") {
      props.setData(
        props.data.sort(function (a, b) {
          if (a.fields.name > b.fields.name) {
            return 1;
          }
          if (a.fields.name < b.fields.name) {
            return -1;
          }
          return 0;
        })
      );
    }
    if (e.target.value === "Z-A") {
      props.setData(
        props.data.sort(function (a, b) {
          if (a.fields.name > b.fields.name) {
            return -1;
          }
          if (a.fields.name < b.fields.name) {
            return 1;
          }
          return 0;
        })
      );
    }
    console.log('repeatedSortedData',props.data)
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
          <select onChange={Select}>
          <option value="A-Z">Alphabetically A-Z</option>
          <option value="Z-A">Alphabetically Z-A</option>
          <option value="low-high">Price low to high</option>
          <option value="high-low"> Price high to low</option>
        </select>
      </div>
      <div className="tutorsContainer">
        {props.data &&
          props.data
            .filter((tutor) =>
              tutor.fields.lessons.toLowerCase().includes(search)
            )
            .map((tutor,index) => {
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
                      key={index}
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
