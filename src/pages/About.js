import React, { Component } from 'react';
import "./About.css";
import pic from "C:/Users/miche/Other/Documents/GitHub/to_do_list_week2-michelle-qiu/src/assets/mq.jpg";

export default class About extends Component {
  render() {
    return (
       <div>
        <div class="split left">
          <div className="centered"> 
              className={"profile_image"}
              <img 
              src={pic} 
              alt="Profile Pic"
              />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">About Me</div>
            <span style={{ padding: "0px" }}/> 
            <div className="brief_description">
              <p> Hello! My name is Michelle Qiu. I'm currently a rising sophomore at Duke University, 
                and I am excited to be a part of IBM Accelerate's Software Development Track! Reach out to me <a href="michelle.qiu@duke.edu">through email</a>, or <a href="https://www.linkedin.com/in/michelle-qiu-2a69ab220/">connect with me on LinkedIn</a>!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}