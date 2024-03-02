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
        const arr = [0, 10 ** 9, 10 ** 9, 10 ** 9]
        if (target === 0) { return 0 }
        for (let i = 1; i <= target; i++) {

            if (i >= 4) {
                arr[i % 4] = Math.min(arr[(i - 1) % 4] + 1, arr[(i - 3) % 4] + 2, arr[(i - 4) % 4] + 1)

            } else if (i >= 3) {
                arr[i] = Math.min(arr[(i - 1) % 4] + 1, arr[(i - 3) % 4] + 2)
            } else {
                arr[i] = arr[(i - 1) % 4] + 1
            }

            if (i === target) {
                return arr[i % 4]
            }
        }

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
