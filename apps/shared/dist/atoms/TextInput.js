"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.TextInput = void 0;
const react_1 = __importDefault(require("react"));
// Text Input Atom Component
const TextInput = ({ label, placeholder, value, onChange }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("label", null, label),
        react_1.default.createElement("input", { type: "text", placeholder: placeholder, value: value, onChange: onChange })));
};
exports.TextInput = TextInput;
// Button Atom Component
const Button = ({ label, onClick }) => {
    return react_1.default.createElement("button", { onClick: onClick }, label);
};
exports.Button = Button;
