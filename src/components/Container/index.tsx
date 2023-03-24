import React from 'react'

interface ButtonProps {
    children?: any;
}

export const Container = (props:ButtonProps) => {
  return (
    <div className='container'>
        {props.children}
    </div>
  )
}