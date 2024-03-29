"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MButton = void 0;
const react_1 = __importDefault(require("react"));
const atoms_1 = require("@monorepo/shared/atoms");
// Button Atom Component
const MButton = ({ label, onClick }) => {
    return react_1.default.createElement(atoms_1.Button, { label: label, onClick: onClick });
};
exports.MButton = MButton;
