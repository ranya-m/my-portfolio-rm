import React from 'react';

export default function NavDrop ({href, text, setToggle}) {
  return (
    <div>
      <div onClick={(prev) => setToggle(!prev)}>
        <a href={href} className='text-m sm:text-xl'>{text}</a>
      </div>
    </div>
  )
}
