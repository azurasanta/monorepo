"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchForm = exports.LoginForm = void 0;
const react_1 = __importStar(require("react"));
const Button_1 = require("../atoms/Button");
const TextInput_1 = require("../atoms/TextInput");
// Login Form Molecule Component
const LoginForm = ({ onSignIn }) => {
    const [username, setUsername] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const handleSignIn = (event) => {
        event.preventDefault();
        onSignIn({ username, password });
    };
    return (react_1.default.createElement("form", { onSubmit: handleSignIn },
        react_1.default.createElement(TextInput_1.TextInput, { label: "Username", placeholder: "Enter your username", value: username, onChange: (e) => setUsername(e.target.value) }),
        react_1.default.createElement(TextInput_1.TextInput, { label: "Password", placeholder: "Enter your password", value: password, onChange: (e) => setPassword(e.target.value) }),
        react_1.default.createElement(Button_1.Button, { label: "Sign In", onClick: () => handleSignIn })));
};
exports.LoginForm = LoginForm;
// Search Form Molecule Component
const SearchForm = ({ onSubmit }) => {
    const [query, setQuery] = (0, react_1.useState)('');
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(query);
    };
    return (react_1.default.createElement("form", { onSubmit: handleSubmit },
        react_1.default.createElement(TextInput_1.TextInput, { label: "Search", placeholder: "Enter your query", value: query, onChange: (e) => setQuery(e.target.value) }),
        react_1.default.createElement(Button_1.Button, { label: "Search", onClick: () => handleSubmit })));
};
exports.SearchForm = SearchForm;
