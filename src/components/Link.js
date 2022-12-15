import React from 'react'
import useNavigation from '../hooks/use-navigation';

function Link({children, to}) {
  const {navigate} = useNavigation()
  const handleClick = (e)=>{
    if(e.metaKey || e.ctrlKey) return;

    e.preventDefault();
    navigate(to);
  }
  return (
    <a href={to} onClick={handleClick}>{children}</a>
  )
}

export default Link