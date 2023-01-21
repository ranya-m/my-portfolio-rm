import React from 'react'

export default function Socials() {
  return (
    <div className='w-fit h-0 sticky top-[56vh] sm:top-[35vh] lg:top-[38vh] left-[0%] z-50'>
        <div className='flex flex-col bg-[#eee0e83c] rounded-lg px-[1px] shadow-lg shadow-mydark'>
            <a target='_blank' href="https://github.com/ranya-m"><i className=' text-mydark hover:text-spaceBlue hover:scale-150 m-1 text-sm md:text-lg bx bxl-github'></i></a> 
            <a target='_blank' href="https://discordapp.com/users/1003642072303149246"><i className=' text-mydark hover:text-spaceBlue hover:scale-150 m-1 text-sm md:text-lg bx bxl-discord-alt ' ></i></a> 
            <a target='_blank' href="https://www.linkedin.com/in/ranya-m/"><i className=' text-mydark hover:text-spaceBlue hover:scale-150 m-1 text-sm md:text-lg bx bxl-linkedin-square '></i></a> 
        </div>
    </div> 
  )
}
