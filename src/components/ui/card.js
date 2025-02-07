import React from 'react'
import './card.css'

const Card = ({ children, className, ...props }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardHeader = ({ children, className, ...props }) => {
  return (
    <div className={`p-4 border-b border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardTitle = ({ children, className, ...props }) => {
  return (
    <h3 className={`text-lg font-semibold ${className}`} {...props}>
      {children}
    </h3>
  )
}

const CardDescription = ({ children, className, ...props }) => {
  return (
    <p className={`text-gray-500 ${className}`} {...props}>
      {children}
    </p>
  )
}

const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardFooter = ({ children, className, ...props }) => {
  return (
    <div className={`p-4 border-t border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Title = CardTitle
Card.Description = CardDescription
Card.Content = CardContent
Card.Footer = CardFooter

export default Card
