// Loopoing excercise 1

const game = {
    "suspects": [
        {
            name: "Rusty",
            color: "orange",
        },
        {
            name: 'sacrlet',
            color: 'red'
        }
    ]
}

let length  = game.suspects.length
for (i =0; i< length ;i++) {
    console.log(game.suspects[i])
}