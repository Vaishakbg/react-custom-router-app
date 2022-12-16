import React from 'react';
import { FaPencilRuler } from "react-icons/fa";
import Link from './Link';

function Sidebar() {
  const links = [
    { label:'Dropdown', path:'/' },
    { label:'Buttons', path:'/buttons' },
    { label:'Accordion', path:'/accordion' },
  ];

  const renderedLinks = links.map((link) => {
    return <Link 
      className="block"
      activeLinkClass = "bg-gray-200 text-bold hover:bg-gray-200"
      key={link.label} 
      to={link.path}>
        {link.label}
      </Link>
  });

  return (
    <div className='w-72 h-full overflow-y-auto border-r border-gray-300 fixed top-0 left-0 right-0 px-4'>
      <div className="flex py-4 items-center text-2xl border-b mb-4">
        <FaPencilRuler className='text-red-500 mr-3' />
        <span className='font-semibold'>Style Guide</span>
      </div>
      {renderedLinks}
    </div>
  )
}

export default Sidebar