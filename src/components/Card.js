import React, { useEffect, useState } from "react";
import Dots from "../images/icon-ellipsis.svg";
import WorkIcon from "../images/icon-work.svg";
import PlayIcon from "../images/icon-play.svg";
import StudyIcon from "../images/icon-study.svg";
import ExerciseIcon from "../images/icon-exercise.svg";
import SocialIcon from "../images/icon-social.svg";
import CareIcon from "../images/icon-self-care.svg";
import styled from "styled-components";

//
//======================================================
//======================================================
const StyledDiv1 = styled.div`
     background-color: ${(props) => props.colorMe};
     margin: 20px 0;
     border-radius: 10px;
     color: white;
`;
//======================================================
const StyledDiv2 = styled.div``;
//======================================================
const StyledIconWrap = styled.div`
     display: flex;
     width: 50px;
     height: 50px;
     background-image: url(${(props) => props.iconMe});
     background-position: center;
     background-size: contain;
     background-repeat: no-repeat;
     margin-left: auto;
     margin-right: 20px;
`;
//======================================================
const StyledImg1 = styled.img`
     width: 40px;
     z-index: -1;
     display: flex;
     /* margin-left: 50px; */
`;
//======================================================
//======================================================
const Card = ({ data, selectTime }) => {
     // console.log(data, selectTime);
     const { title } = data;
     const { daily, weekly, monthly } = data.timeframes;
     //======================================================
     const [time, setTime] = useState(null);
     const [string, setString] = useState("");
     // const [thisColor, setThisColor] = useState(`hsl(15, 100%, 70%)`);
     const [thisColor, setThisColor] = useState(`hsl(348, 100%, 68%)`);
     const [thisIcon, setThisIcon] = useState(PlayIcon);
     const [current, setCurrent] = useState(null);
     // const [timeframes, setTimeframes] = useState(null);
     //======================================================

     // console.log(title, thisColor);
     //======================================================

     useEffect(() => {
          // effect
          // setTimeframes(weekly.timeframes);
          if (selectTime === "daily") {
               setTime(daily);
               setString("Yesterday - ");
          } else if (selectTime === "weekly") {
               setTime(weekly);
               setString("Last Week - ");
          } else {
               setTime(monthly);
               setString("Last Month - ");
          }
          return () => {
               // cleanup
          };
     }, [selectTime, time, daily, weekly, monthly]);
     //======================================================
     //======================================================
     useEffect(() => {
          // effect
          if (title === "Work") {
               setThisColor(`hsl(15, 100%, 70%)`);
               setThisIcon(WorkIcon);
          }
          if (title === "Play") {
               setThisColor(`hsl(195, 74%, 62%)`);
               setThisIcon(PlayIcon);
          }
          if (title === "Study") {
               setThisColor(`hsl(348, 100%, 68%)`);
               setThisIcon(StudyIcon);
          }
          if (title === "Exercise") {
               setThisColor(`hsl(145, 58%, 55%)`);
               setThisIcon(ExerciseIcon);
          }
          if (title === "Social") {
               setThisColor(`hsl(264, 64%, 52%)`);
               setThisIcon(SocialIcon);
          }
          if (title === "Self Care") {
               setThisColor(`hsl(43, 84%, 65%)`);
               setThisIcon(CareIcon);
          }

          return () => {
               // cleanup
          };
     }, [title]);
     //======================================================
     //======================================================
     // console.log(thisColor, ">>", current);
     //======================================================
     return (
          <div className="card-container">
               <StyledDiv1 colorMe={thisColor}>
                    <div className="top-bar">
                         {/* <div className="icon-wrap">
                              <StyledImg1 src={WorkIcon}></StyledImg1>
                         </div> */}
                         <StyledIconWrap iconMe={thisIcon}></StyledIconWrap>
                    </div>

                    <div className="info-wrap">
                         <div className="top">
                              <div className="title">{title}</div>
                              <div className="more">
                                   <img src={Dots} alt="" />
                              </div>
                         </div>
                         <div className="bottom">
                              <div className="current-time">
                                   {time?.current} hrs
                              </div>
                              <div className="previous-time">
                                   {" "}
                                   {string + time?.previous} hrs
                              </div>
                         </div>
                    </div>
               </StyledDiv1>
          </div>
     );
};

export default Card;
