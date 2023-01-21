import React from "react";
import "./home.css";
import {motion} from "framer-motion";
import {MdOutlineWavingHand} from "react-icons/md";
import profile from "../../../assets/img/profile-square.jpg";
import wave from "../../../assets/img/wave.png";
import {codingSkills} from '../../../data';


export default function Home() {

return (
<section id="home" className="h-[100vh] relative w-screen grid  bg-gradient-to-r from-spacePurple to-spaceBlue items-center justify-center">


<div className="md:flex items-center justify-center py-4 w-screen rounded-lg mx-2 ">

{/* CHAT BOX */}
      <div className="md:w-[55%] mx-auto md:mx-0">

        <div className="flex gap-x-2 ml-2 sm:ml-0 sm:gap-x-6 items-center justify-center">
            <div className="w-[90px] sm:w-[140px] rounded-full overflow-hidden shadow-md shadow-yellow md:ml-2">
              <img src={profile} alt="Profile image" className="w-full h-full object-cover"/>
            </div>

            <div className="relative flex flex-col gap-2 mr-3 sm:mr-0 mb-6 md:mb-0">
              <div className="bg-mylightOpaque rounded-lg py-1 px-3 flex w-fit"> 
              <MdOutlineWavingHand className="text-xl text-yellow text-opacity-70 mr-1"/> 
              Hello, I'm Ranya</div>

              <div className="bg-mylightOpaque rounded-lg py-1 px-3 flex w-fit max-w-[260px]">A FullStack Developer who loves to build aesthetic and functional Websites & Apps</div>

              <div className="bg-mylightOpaque rounded-lg px-3 flex w-fit">Find out more below !</div>
              <div className="dot-flashing bg-white"></div>   

            </div>        
        </div>
        
      </div>


{/* CODING ICONS  */}
      <div className="mt-6 w-[250px] sm:w-[300px] grid grid-cols-3 gap-y-4 md:w-[30%] md:gap-8 md:grid md:grid-cols-3 mx-auto">
          {codingSkills.map((skill) => {
            return (
              <div
                className="flex justify-center flex-col   border-mylightOpaque h-fit rounded-md w-[70px] sm:w-[80px] sm:p-2 bg-mylightOpaque"
                key={skill.id} id={`icon${skill.id}`}
              >
                    <div className="flex flex-col text-[1.5em] text-mydark mt-1 mx-auto lg:text-[1.7em]">
                      {skill.icon} 
                    </div>

                    <span className="text-mydark font-semibold text-[0.8rem] mx-auto">
                      {skill.title}
                      </span>
              </div>
            );
          })}
      </div>

</div>


  {/* wave deco */}
   <img src={wave} className=" w-[120%] absolute bottom-[0vh] h-[15vh] sm:h-[22vh]"/>
  
</section>
  );
}
