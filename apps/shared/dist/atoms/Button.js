"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
// Button Atom Component
const Button = ({ label, onClick }) => {
    return react_1.default.createElement("button", { onClick: onClick }, label);
};
exports.Button = Button;
