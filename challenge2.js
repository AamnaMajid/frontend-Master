// Destructuring challenge
// extract location and weapon prop

var {name, room, weapon} = {name: "Rusty", room:"kitchen", weapon: "candlestick"}

const extractedProp = {room, weapon}

// or if we do not want to return an object then

const loc = room
const weapon  = weapon