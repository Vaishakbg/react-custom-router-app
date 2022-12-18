import classNames from 'classnames'
import React from 'react'
import propTypes from 'prop-types'

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
      'border-stone-900 bg-stone-900 text-white':dark,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-yellow-500': outline && warning,
      'text-green-500': outline && success,
      'text-red-500': outline && danger,
      'text-cyan-500': outline && info,
      'text-stone-900': outline && dark,
    }
  )

  return (
    <button {...rest} className={classes}>{children}</button>
  )
}

Button.propTypes={
  checkVariationValue: ({ primary, secondary, success, warning, danger, info, dark }) => {
    // console.log(props);
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!info) +
      Number(!!dark) +
      Number(!!danger);

      if(count>1) return new Error('Only one of primary, secondary, success, warning, danger, light, info, dark can be true')
  },
}

export default Button