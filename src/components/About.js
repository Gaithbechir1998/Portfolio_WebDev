import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let DataDev = this.props.DataDev;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 DataDev.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{DataDev.name}</span>
                     <br></br>
       						   <span>
                     {DataDev.address}
                    </span>
                    <br></br>
                    <span>{DataDev.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}