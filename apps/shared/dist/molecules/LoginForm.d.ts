import React from 'react';
type LoginFormProps = {
    onSignIn: (credentials: {
        username: string;
        password: string;
    }) => void;
};
export declare const LoginForm: ({ onSignIn }: LoginFormProps) => React.JSX.Element;
type SearchFormProps = {
    onSubmit: (query: string) => void;
};
export declare const SearchForm: ({ onSubmit }: SearchFormProps) => React.JSX.Element;
export {};
