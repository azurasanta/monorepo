import React, { ChangeEvent } from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

// Button Atom Component
export const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};