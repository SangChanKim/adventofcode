const fs = require('fs')

function processCommands(state, commands, navigator) {
    for (let command of commands) {
        let [direction, magnitude] = command.split(' ')
        navigator(state, direction, parseInt(magnitude))
    }
}

fs.readFile('./input.txt', 'utf-8', (err, data) => {
    commands = data.split('\n')
    commands.pop()

    // Part 1
    const state1 = {
        x: 0,
        y: 0
    }

    const navigator1 = function(state, direction, magnitude) {
        switch (direction) {
            case "forward":
                state.x += magnitude
                break
            case "up":
                state.y -= magnitude
                break
            case "down": 
                state.y += magnitude
                break
        }
    }

    processCommands(state1, commands, navigator1)
    console.log(state1.x, state1.y)
    console.log(state1.x * state1.y)
        
    // Part 2
    const state2 = {
        x: 0,
        y: 0,
        aim: 0
    }

    const navigator2 = function(state, direction, magnitude) {
        switch (direction) {
            case "forward":
                state.x += magnitude
                state.y += magnitude * state.aim
                break
            case "up":
                state.aim -= magnitude
                break
            case "down": 
                state.aim += magnitude
                break
        }
    }

    processCommands(state2, commands, navigator2)
    console.log(state2.x, state2.y)
    console.log(state2.x * state2.y)
})