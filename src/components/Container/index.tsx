import React from 'react'

export interface ContainerProps {
    children?: any;
}

export const Container = (props:ContainerProps) => {
  return (
    <div className='container'>
        {props.children}
    </div>
  )
}