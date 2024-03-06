import React, { ChangeEvent } from 'react';

import {Button} from '@monorepo/shared/atoms';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

// Button Atom Component
export const MButton = ({ label, onClick }: ButtonProps) => {
  return <Button label={label} onClick={onClick} />
};