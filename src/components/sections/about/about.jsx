import React from 'react'
import {generalSkills} from '../../../data';


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
            <div className="text-spacePurple text-[2rem] hidden sm:block">{skill.icon}</div>
            <div>
                <div className='flex items-center'>
                  <div className="text-spacePurple text-[2rem] block pr-2 sm:hidden">{skill.icon}</div>
                  <h3 className="text-xl">{skill.title}</h3>
                  </div>
              <p className="opacity-80 mt-4 text-[0.9rem] text-justify">
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
