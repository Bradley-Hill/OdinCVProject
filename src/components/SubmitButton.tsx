import React from 'react'
import "../styles/SubmitButton.css"

interface SubmitButtonProps {
    children: React.ReactNode;
}

export default function SubmitButton({children}: SubmitButtonProps) {
  return (
    <button className='submitButton' type='submit' >{children}</button>
  )
}
