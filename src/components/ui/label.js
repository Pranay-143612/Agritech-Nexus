import React from 'react'
import './label.css'

const Label = ({ children, className, ...props }) => {
  return (
    <label className={`block text-gray-700 ${className}`} {...props}>
      {children}
    </label>
  )
}

export default Label
