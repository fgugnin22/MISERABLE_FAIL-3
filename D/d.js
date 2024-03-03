"use strict"
const fs = require('fs');
const lines = fs.readFileSync('input.txt', 'utf-8').split('\n').map(line => line.trim()).filter(line => line !== "");
const matrix = lines.map(line => line.split(''))
const sloni = []
const ladi = []
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === "R") {
            ladi.push([i, j])
        }
        if (matrix[i][j] === "B") {
            sloni.push([i, j])
        }
    }
}
const isBetweenHorizontal = (x, y1, y2) => {
    for (let i = y1 + 1; i <= y2 - 1; i++) {
        if (matrix[x][i] !== "*") {
            return true
        }
    }
    return false
}
const isBetweenVertical = (y, x1, x2) => {
    for (let i = x1 + 1; i <= x2 - 1; i++) {
        if (matrix[i][y] !== "*") {
            return true
        }
    }
    return false
}
const isBetweenDiagonal = (x1, y1, x2, y2) => {
    let directionX = 0;
    let directionY = 0
    if (x2 > x1) {
        directionX = 1
    } else {
        directionX = -1
    }
    if (y2 > y1) {
        directionY = 1
    } else {
        directionY = -1
    }
    for (let i = 1; i < Math.abs(x2 - x1); i++) {
        if (matrix[x1 + i * directionX][y1 + i * directionY] !== "*") {
            return true
        }
    }
    return false
}
const isBetween = (x1, y1, x2, y2) => {
    if (Math.abs(x1 - x2) === Math.abs(y1 - y2) && Math.abs(x1 - x2) <= 1) {
        return false
    }
    if (x1 === x2) {
        return isBetweenHorizontal(x1, Math.min(y1, y2), Math.max(y1, y2))
    }
    if (y1 === y2) {
        return isBetweenVertical(y1, Math.min(x1, x2), Math.max(x1, x2))
    }
    if (x1 - x2 === y1 - y2 || x2 - x1 === y1 - y2) {
        return isBetweenDiagonal(x1, y1, x2, y2)
    }
    return false
}
const isPotentialSlon = (i, j, sx, sy) => {
    if (i - sx === j - sy || sx - i === j - sy) {
        return true
    }
    return false
}
const isPotentialLad = (i, j, lx, ly) => {
    if (i === lx || j === ly) {
        return true
    }
    return false
}
const slon = (i, j) => {
    for (let sl of sloni) {
        if (isPotentialSlon(i, j, sl[0], sl[1])) {
            if (!isBetween(i, j, sl[0], sl[1])) {
                return true
            }
        }
    }
    return false
}
const ladya = (i, j) => {
    for (let ld of ladi) {
        if (isPotentialLad(i, j, ld[0], ld[1])) {
            if (!isBetween(i, j, ld[0], ld[1])) {
                return true
            }
        }
    }
    return false
}
let sum = 64
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (slon(i, j) || ladya(i, j)) {
            sum--;
        }
    }
}
// console.log(sum)
fs.writeFileSync('output.txt', String(sum) + "\n")
