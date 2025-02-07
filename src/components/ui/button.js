import React from 'react'
import './button.css'

const Button = ({ children, className, variant, ...props }) => {
  const baseClasses = 'px-4 py-2 rounded text-white font-semibold'
  let variantClasses = ''

  switch (variant) {
    case 'secondary':
      variantClasses = 'bg-gray-500 hover:bg-gray-600'
      break
    case 'destructive':
      variantClasses = 'bg-red-500 hover:bg-red-600'
      break
    case 'outline':
      variantClasses = 'bg-white border border-gray-500 text-gray-700 hover:bg-gray-100'
      break
    case 'ghost':
      variantClasses = 'bg-transparent hover:bg-gray-100'
      break
    case 'link':
      variantClasses = 'bg-transparent text-blue-500 hover:underline'
      break
    default:
      variantClasses = 'bg-blue-500 hover:bg-blue-600'
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
