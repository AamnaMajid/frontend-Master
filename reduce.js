const reduce = function (list, fn , initial_val) {
    let sum = initial_val

    for(i = 0; i < list.length ; i++) {
        if(i === 0 && sum === undefined) {
            sum = list[0]
        }
        else {
            sum = fn(list[i], sum)
        }
    }
    return sum
}


reduce([1,2,3], (val, sum) => val + sum )