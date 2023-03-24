import React from 'react'

interface ButtonProps {
    children?: any;
}

export const Button = (props:ButtonProps) => {

    const {children} = props

  return (
    <button {...props} className='btn btn-primary'>{children}</button>
  )
}