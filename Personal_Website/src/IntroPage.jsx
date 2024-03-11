import { SlLocationPin } from "react-icons/sl";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";



function Into(){


  return(
  <>
    <div className="Intro-Div">
      <div className="Everything-Div">
        <div className="Text-Picture-Div">
          <div className="info-div">
            <h1 className="h2-intro">Hi, I'm Jakob 👋</h1>
            <div className="icon-text-pair">
              <SlLocationPin size="3em" color="white" /> 
              <p className="info-text" >Graz, Austria</p>
            </div>
            <div className="icon-text-pair">
              <IoMdCheckmarkCircleOutline size="3em" color="green" />
              <p className="info-text">Open to new challenges</p>
            </div>
            <div className="icon-text-pair">
              <IoMailOpenOutline size="3em" color="white"/>
              <a className="info-text emailme" id="email_me" href="mailto:jakob.glinz@gmx.at">jakob.glinz@gmx.at</a>
            </div>
            <div className="btn-div">
              <button className="button">
               <a className="button-content" href="src/assets/Jakob_Glinz_resume.pdf" download>Download CV</a>
              </button>
            </div>
          </div>
          <div className="img-intro">
            <img className="portrait" src="src/assets/portrait.jpg" height="400" alt="This is a picture of Jakob Glinz"></img>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Into;