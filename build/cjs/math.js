"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maximumNumber = exports.minimumNumber = exports.probability = void 0;
const probability = (p) => !!p && Math.random() <= p;
exports.probability = probability;
const minimumNumber = (array) => Math.min(...array);
exports.minimumNumber = minimumNumber;
const maximumNumber = (array) => Math.max(...array);
exports.maximumNumber = maximumNumber;
