import React from 'react'

export default function Footer() {
  return (
    <div className="container mx-auto p-4 flex flex-wrap gap-2 items-center justify-between">
    <div>
      <a target="_blank" href="https://github.com/ranya-m" className="mr-2 text-[0.9rem] hover:font-semibold">
        Github
      </a>
      <a target="_blank" href="https://discordapp.com/users/1003642072303149246" className="mr-2 text-[0.9rem] hover:font-semibold">
        Discord
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/ranya-m/" className="mr-2 text-[0.9rem] hover:font-semibold">
        LinkedIn
      </a>
    </div>
    <div className="text-[0.9rem]">
      &#169; 2023 Made with React & Tailwind, Set up with Vite.
    </div>
  </div>
  )
}
