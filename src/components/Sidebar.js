import React from 'react'
import Link from './Link';

function Sidebar() {
  const links = [
    { label:'Dropdown', path:'/' },
    { label:'Buttons', path:'/buttons' },
    { label:'Accordion', path:'/accordion' },
  ];

  const renderedLinks = links.map((link) => {
    return <Link key={link.label} to={link.path}>{link.label}</Link>
  });

  return (
    <div>
      {renderedLinks}
    </div>
  )
}

export default Sidebar