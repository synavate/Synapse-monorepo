"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.fetcher = exports.nanoid = exports.cn = void 0;
const clsx_1 = require("clsx");
const nanoid_1 = require("nanoid");
const tailwind_merge_1 = require("tailwind-merge");
function cn(...inputs) {
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
exports.cn = cn;
exports.nanoid = (0, nanoid_1.customAlphabet)('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 7); // 7-character random string
async function fetcher(input, init) {
    const res = await fetch(input, init);
    if (!res.ok) {
        const json = await res.json();
        if (json.error) {
            const error = new Error(json.error);
            error.status = res.status;
            throw error;
        }
        else {
            throw new Error('An unexpected error occurred');
        }
    }
    return res.json();
}
exports.fetcher = fetcher;
function formatDate(input) {
    const date = new Date(input);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}
exports.formatDate = formatDate;
