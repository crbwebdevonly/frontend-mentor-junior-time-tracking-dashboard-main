import logo from "./logo.svg";
import "./app.scss";
import Profile from "./components/Profile";
import Card from "./components/Card";
import { data } from "./data";
import { useState } from "react";

function App() {
     //======================================================
     const [selectTime, setSelectTime] = useState("weekly");
     //======================================================
     //======================================================
     //======================================================
     return (
          <div className="app-container">
               <div className="grid-wrap">
                    <div className="app-profile-wrap">
                         <Profile
                              setSelectTime={setSelectTime}
                              selectTime={selectTime}
                         />
                    </div>
                    {/* <div className="app-all-cards-wrap"> */}
                    {data.map((e, i) => (
                         <Card
                              data={e}
                              selectTime={selectTime}
                              key={i}
                              // className={`card-${i}`}
                              index={i}
                         />
                    ))}
               </div>
          </div>
     );
}

export default App;
