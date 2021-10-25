import React from "react";

import { data } from "../data";
import JEREMY from "../images/image-jeremy.png";

const Profile = ({ setSelectTime, selectTime }) => {
     //======================================================
     //======================================================
     // console.log(data);
     //======================================================
     //======================================================
     //======================================================
     return (
          <div className="profile-container">
               <div className="top">
                    <div className="img-wrap">
                         <img src={JEREMY} alt="" />
                    </div>
                    <div className="info">
                         <div className="for">Report for</div>
                         <div className="name">Jeremy Robson</div>
                    </div>
               </div>
               <div className="bottom">
                    <ul>
                         {/* selectTime === "daily" && */}
                         <li
                              onClick={() => setSelectTime("daily")}
                              className={
                                   selectTime === "daily"
                                        ? "selected"
                                        : "not-selected"
                              }
                         >
                              Daily
                         </li>
                         <li
                              onClick={() => setSelectTime("weekly")}
                              className={
                                   selectTime === "weekly"
                                        ? "selected"
                                        : "not-selected"
                              }
                         >
                              Weekly
                         </li>

                         <li
                              onClick={() => setSelectTime("monthly")}
                              className={
                                   selectTime === "monthly"
                                        ? "selected"
                                        : "not-selected"
                              }
                         >
                              Monthly
                         </li>
                    </ul>
               </div>
          </div>
     );
};

export default Profile;
