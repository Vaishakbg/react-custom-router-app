import classNames from 'classnames'
import React from 'react'

function Button({
  children,
  primary,
  secondary,
  warning,
  success,
  danger,
  info,
  light,
  dark,
  rounded,
  outline,
  ...rest
}) {

  const classes = classNames(
    rest.className,
    'flex items-center px-3 py-1.5 border',
    {
      'bg-blue-500 text-white':primary,
      'bg-gray-500 text-white':secondary,
      'border-yellow-500 bg-yellow-500 text-white':warning,
      'border-green-500 bg-green-500 text-white':success,
      'border-red-500 bg-red-500 text-white':danger,
      'border-cyan-400 bg-cyan-500 text-white':info,
      'border-white-500 bg-white-500 text-black':light,
      'border-stone-900 bg-stone-900 text-white':dark,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-yellow-500': outline && warning,
      'text-green-500': outline && success,
      'text-red-500': outline && danger,
    }
  )

  return (
    <button {...rest} className={classes}>{children}</button>
  )
}



export default Button