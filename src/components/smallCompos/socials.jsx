import React from 'react'

export default function Socials() {
  return (
    <div className='w-fit h-0 sticky top-[63vh] sm:top-[25vh] md:top-[39vh] left-[0%] z-50'>
        <div className='flex flex-col bg-[#eee0e83c] rounded-lg px-[1px] shadow-lg shadow-mydark text-mydark'>
            <a target='_blank' href="https://github.com/ranya-m"><i className=' hover:text-yellow m-1 text-sm md:text-lg bx bxl-github hover:scale-150'></i></a> 
            <a target='_blank' href="https://discordapp.com/users/1003642072303149246"><i className='  hover:text-yellow  m-1 text-sm md:text-lg bx bxl-discord-alt hover:scale-150' ></i></a> 
            <a target='_blank' href="https://www.linkedin.com/in/ranya-m/"><i className=' hover:text-yellow hover:scale-150  m-1 text-sm md:text-lg bx bxl-linkedin-square '></i></a> 
        </div>
    </div> 
  )
}
