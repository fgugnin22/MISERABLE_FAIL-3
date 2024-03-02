"use strict"
const fs = require('fs');
const readline = require('readline')


const doStuff = async () => {
    const readStream = fs.createReadStream('input.txt')
    const readLines = readline.createInterface({
        input: readStream,
        crlfDelay: Infinity
    });
    const solution = (target) => {
        const arr = [0, 1, 2, 2]
        if (target < 4) { return arr[target] }
        if (target % 4 === 0) { return Math.floor(target / 4) }
        if (target % 4 === 1) { return Math.floor(target / 4) + 1 }
        if (target % 4 === 2 || target % 4 === 3) { return Math.floor(target / 4) + 2 }
    }
    let sum = 0
    let i = 0;
    for await (let line of readLines) {
        if (i === 0) {
            i++
            continue
        }
        line = Number(line)
        sum += solution(line)
    }
    return sum
}
doStuff().then((sum) => fs.writeFileSync("output.txt", String(sum)))
