import React from "react";
//import { Typer } from "react-typetool";
// import Typed from "react-typed"
// import Particles from "react-particles-js";
import "./home.css"

import pic from "../../photos/image.png";

const Home = () => {
  return (
    <div className="w-full relative min-h-screen pt-20">
      <div className="w-full ">
        <div className="container overflow-hidden">
          <div className="particles-canvas-el ">
{/* {      
            <Particles
    params={{
	    particles: {
	        number: {
	            value: 50
	        },
	        size: {
	            value: 3
	        },
          shape: {
          type: "star",
          stroke: {
            width: 0.5,
            color: "#CF9FFF",
          }
        },

	    },
     
	    interactivity: {
	        events: {
	            onhover: {
	                enable: true,
	                mode: "repulse"
	            }
	        }
	    }
	}} /> } */}
  

          </div>
        </div>
      </div>
      <div className=" flex items-center flex-col gap-4 w-full justify-start pt-52 absolute top-0 left-0">
        <p className="name text-8xl  text-font text-center">Ikram Hassan</p>
        {/* <p className=" font-medium text-font text-lg pt-3">
          {/* <Typer
            loop={true}
            text="Software Developer, Tech enthusiast, Book worm"
          /> }
        </p> */}
        <div className=" w-44 h-44 rounded-full overflow-hidden bg-sr">
          <img
            src={pic}
            style={{ width: "100%", height: "110%", objectFit: "cover" }}
            alt=""
          />
        </div>
        <p className=" font-medium text-font text-lg pt-3">
        {/* <Typed className="typed-text"
            strings={["Software engineer 💻", "Tech enthusiast ✨" , "Educator 📚" ]}
            typeSpeed={40}
            backSpeed={60}
            loop
        /> */}
        </p>
        <p className=" font-medium text-font text-lg pt-20 w-71">
         I am an aspiring Software Developer, in a quest for a role that'll enable me to enhance my technical capabilites in
         a welcoming and collaborative environment !
       
          </p>
        {/* <p className=" font-medium text-font text-lg pt-6 w-96">
          For over a decade, I have studied and inscribed the sacred runes and
          performed the arcane rituals that breathe life into the realm of the
          internet.
        </p>
        <p className=" font-medium mt-2 text-font text-lg pt-3 w-96">
          The web can sometimes be indistinguishable from magic, but I have the
          knowledge and patience required to make just about anything.
        </p> */}
      </div>
    </div>
  );
};

export default Home;
