import React from "react";
import './Section1.css'
import Carousel from "react-bootstrap/Carousel";
import M1 from "../images/M1.jpg"
import M2 from "../images/M2.jpg"
import M3 from "../images/M3.jpg"
import M4 from "../images/M4.jpg"
import H1 from "../images/H1.png"
import H2 from "../images/H2.png"
import Mz_1 from "../images/Mz_1.jpg"
import Mz_2 from "../images/Mz_2.jpg"
import Mz_3 from "../images/Mz_10.jpg"
import Mz_4 from "../images/Mz_4.jpg"
import Mz_5 from "../images/Mz_5.jpg"
import Mz_6 from "../images/Mz_6.jpg"
import Mz_7 from "../images/Mz_7.jpg"
import Mz_8 from "../images/Mz_12.jpg"
import Mz_9 from "../images/Mz_9.jpg"
import Mz_10 from "../images/Mz_3.jpg"
import Mz_11 from "../images/Mz_11.jpg"
import Mz_12 from "../images/Mz_8.jpg"

function Section1(){
    return(
      <div>
          <div className="Section1">
          <div className="S1C1">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100 Ad3_img"src={M1}alt="Third slide"/>
                <Carousel.Caption className="Ad3_txt M1_txt">
                  <h3>"DIABETES IS A CHRONIC CONDITION."</h3>
                  <p>"Type 2 Diabetes Can Elicit Psychological Distress and Diminish Quality of Life."</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 Ad1_img" src={M2} alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 Ad3_img"src={M3}alt="Third slide"/>
                <Carousel.Caption className="Ad3_txt M1_txt Ca_5">
                  <h3>"DUET PG examinations and now CUET exams will be conducted at both UG and PG levels."</h3>
                  <p>"UG and PG admissions for DU on the basis of CUET scores."</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block w-100 Ad2_img"src={M4}alt="Second slide"/>
                 <Carousel.Caption style={{color:'black'}}>
                  <h3>Still people are not ready !</h3><p>"It's brave to ask for help."</p>
                 </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
            <div className="S1C2">
              <div className="S1C2R1">
                  <p>"YOU ARE NOT ALONE IN YOUR STRUGGLES."</p>
                  <img src={H1} alt={"H1_img"} className="H1_img"></img>
              </div>
              <div className="S1C2R2">
                  <p>"THE BRAIN IS THE COMMAND CENTER TO BODY."</p>
                  <img src={H2} alt={"H2_img"} className="H2_img"></img>
              </div>
            </div>
      </div>
            <div className="Magazine">
             <div className="slider">
	             <div className="slide-track">
                <div className="slide"><img src={Mz_1} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_2} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_3} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_4} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_5} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_6} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_7} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_8} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_9} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_10} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_11} height={"100%"} width={"250"} alt={"Mz1"} /></div>
                <div className="slide"><img src={Mz_12} height={"100%"} width={"250"} alt={"Mz1"} /></div>
	            </div>
             </div>
            </div>
    </div>
    )
}
export default Section1