import React, { MouseEventHandler } from 'react'
import "../styles/EditButton.css"

interface EditButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}

export default function EditButton({onClick, children}: EditButtonProps) {
  return (
    <button className='editButton' type='button' onClick={onClick}>{children}</button>
  )
}