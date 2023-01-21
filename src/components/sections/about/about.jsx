import React from 'react'
import {generalSkills} from '../../../data';
import wave2 from "../../../assets/img/wave-haikei.png";


export default function About() {
  return (

    <div className="section pt-[3rem] pb-[4rem]" id="about">
    <div className="mb-3">
      <h2 className="text-[1.5rem] font-bold">About me</h2>
      <div className='h-[2px] w-[40px] bg-spaceBlue rounded-full'></div>
    </div>

    <div className="grid sm:grid-cols-2 gap-8">
      {generalSkills.map((skill) => {
        return (
          <a
          target="_blank" 
          href={skill.href}
            key={skill.id}
            className={`${skill.title} flex gap-4 p-4 hover:bg-spacePurple hover:bg-opacity-20 rounded-lg`}
          >
            <div className="text-spacePurple text-[2rem]">{skill.icon}</div>
            <div>
              <h3 className="text-xl">{skill.title}</h3>
              <p className="opacity-80 mt-4 text-[0.9rem]">
                {skill.text}
              </p>
            </div>
          </a>
        );
      })}
    </div>
    </div>

  )
}
