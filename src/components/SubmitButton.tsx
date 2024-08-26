import React, { MouseEventHandler } from 'react'
import "../styles/SubmitButton.css"

interface SubmitButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}

export default function SubmitButton({onClick, children}: SubmitButtonProps) {
  return (
    <button className='submitButton' type='submit' onClick={onClick}>{children}</button>
  )
}
