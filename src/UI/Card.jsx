import React from 'react'
import { SiClojure } from 'react-icons/si'

const Card = ({className, children}) => {
  return (
    <article className={`card ${className}`}>
        {children}
    </article>
  )
}

export default Card