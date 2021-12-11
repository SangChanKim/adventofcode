const fs = require('fs')

function parseMeasurements(data) {
    let parsed = data.split('\n').map((_) => parseInt(_))
    parsed.pop()
    return parsed
}

function countIncreases(e) {
    increased = 0
    for (let i = 1; i < e.length; i++) {
        if (e[i] > e[i - 1]) {
            increased++
        }
    }

    return increased
}

fs.readFile('./input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    // Part 1
    let depths = parseMeasurements(data)

    let depthsIncreased = countIncreases(depths)
    console.log(depthsIncreased)

    // Part 2
    let sumsOfDepths = []
    for (let i = 0; i + 3 <= depths.length; i += 1) {
        window = depths.slice(i, i + 3)
        windowSum = window.reduce((a, b) => a + b, 0)
        sumsOfDepths.push(windowSum)
    }
    console.log(sumsOfDepths[sumsOfDepths.length - 1])
    let sumsOfDepthsIncreased = countIncreases(sumsOfDepths)
    console.log(sumsOfDepthsIncreased)
})
