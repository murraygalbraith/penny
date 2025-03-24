import React from 'react'

export const GlitchText = ({ children }) => {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
    </span>
  )
}
