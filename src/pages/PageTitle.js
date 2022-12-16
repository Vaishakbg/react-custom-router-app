import React, { useContext } from 'react'
import NavigationContext from '../context/Navigation'

function PageTitle() {
    const {currentPath} = useContext(NavigationContext);
    const pageTitle = currentPath.slice(1);
  return (
    <div>
        <h1 className='capitalize text-2xl p-4 border-b font-semibold'>{pageTitle ? pageTitle:'Dropdown'}</h1>
    </div>
  )
}

export default PageTitle