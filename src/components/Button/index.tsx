import React from 'react'

export interface ButtonProps {
    children?: any;
}

export const Button = (props:ButtonProps) => {

    const {children} = props

  return (
    <button {...props} className='btn btn-primary'>{children}</button>
  )
}