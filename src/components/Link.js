import classNames from 'classnames';
import React from 'react'
import useNavigation from '../hooks/use-navigation';

function Link({children, to, className, activeLinkClass, ...rest}) {
  const {currentPath, navigate} = useNavigation()
  const handleClick = (e)=>{
    if(e.metaKey || e.ctrlKey) return;

    e.preventDefault();
    navigate(to);
  }
  const classes = classNames(
    'text-black-500 p-2', 
    className, 
    currentPath === to && activeLinkClass
  );

  return (
    <a {...rest} className={classes} href={to} onClick={handleClick}>{children}</a>
  )
}

export default Link