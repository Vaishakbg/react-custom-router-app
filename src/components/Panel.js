import classNames from 'classnames'
import React from 'react'

function Panel({children, className, ...rest}) {
    const classes = classNames(
        'border rounded p-3 shadow bg-white w-full',
        className
        )
  return (
    <div {...rest} className={classes}>{children}</div>
  )
}

export default Panel