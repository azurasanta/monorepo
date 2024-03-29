import React, { ChangeEvent } from 'react';
type TextInputProps = {
    label: string;
    placeholder?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export declare const TextInput: ({ label, placeholder, value, onChange }: TextInputProps) => React.JSX.Element;
type ButtonProps = {
    label: string;
    onClick: () => void;
};
export declare const Button: ({ label, onClick }: ButtonProps) => React.JSX.Element;
export {};
