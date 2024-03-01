"use strict"
const fs = require('fs');
const lines = fs.readFileSync('input.txt', 'utf-8').split('\n');
const [p, v] = lines[0].split(" ").map(v => Number(v))
const [q, m] = lines[1].split(" ").map(v => Number(v))
const dist = Math.abs(p - q) - 1
let overlap = 0
let i = Math.min(p - v, q - m)

if (p - v <= q - m && p + v >= q - m) {
    overlap += Math.abs(p + v - q + m + 1) - Math.max(0, p + v - q - m)
    // console.log("fir", Math.abs(p + v - q + m + 1), Math.max(0, p + v - q - m))
}
if (q - m < p - v && q + m >= p - v) {
    overlap += Math.abs(q + m - p + v + 1) - Math.max(0, q + m - p - v)
    // console.log("sec", Math.abs(q + m - p + v) + 1, Math.max(0, q + m - p - v))
}
const answer = (v * 2 + 1) + (m * 2 + 1) - overlap
fs.writeFileSync('output.txt', String(answer))
// console.log(answer, overlap)