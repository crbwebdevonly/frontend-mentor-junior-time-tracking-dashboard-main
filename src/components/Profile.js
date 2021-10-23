import React from "react";

import { data } from "../data";
import JEREMY from "../images/image-jeremy.png";

const Profile = () => {
     //======================================================
     //======================================================
     console.log(data);
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
                         <li>Daily</li>
                         <li>Weekly</li>
                         <li>Monthly</li>
                    </ul>
               </div>
          </div>
     );
};

export default Profile;
