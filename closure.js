const add = () => {
    const x = 'Help I found a clue'
    let count = 0
    const alerter = () => {
        console.log(`${x} ${++count}`)

    }
    return alerter
}

const funcAlert = add() // creates parent exec context

funcAlert() // creates child exec context retaining count value
funcAlert()

