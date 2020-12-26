import { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import { baseURL, config } from "./services";
import './App.css';
import Tutors from './components/Tutors';
import AddTutor from './components/AddTutor';
import Nav from './components/Nav';
import TutorInfo from "./components/TutorInfo";
import Payment from "./components/Payment"
import Home from "./components/Home.jsx"


function App() {
  const [data, setData] = useState([]);
  const [tutorInfo, setTutorInfo] = useState(null);
  const[total,setTotal] = useState(null);
  const [toggleFetch, setToggleFetch] = useState(false);


  useEffect(() => {
    const getData = async () => {
      let resp = await axios.get(baseURL, config
      );
      // console.log(resp.data.records);
      setData(resp.data.records);
    }
    getData();
  }, []);
  console.log('main data is',data)

  
  return (
   
    <div className="App">
      <Nav />
      <Route path="/tutors">
        <Tutors data={data} setTutorInfo={setTutorInfo} setData={setData}/>
      </Route>
      <Route path="/AddTutor" >
        <AddTutor setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/TutorInfo" >
        <TutorInfo tutorInfo={tutorInfo} setTotal={setTotal}/>
      </Route>
      <Route path="/Payment"  >
        <Payment tutorInfo={tutorInfo} total={total}/>
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      
    </div>
    
  );
}

export default App;
