import React from 'react'
import './Button.css'


const Button = (props) => {
  return (
    <div className='btn'>{props.children} <i className="fas fa-chevron-right"></i>
    </div>
  )
}

export default Button