// filter items in array

const _ = {}

_.filter = function(array, callback) {
  
    let new_array = []

    for(i=0 ; i<array.length ; i++) {
        if(callback(array[i] , i , array ) === true) {
            new_array.push(array[i])
        }
    }

    return new_array

}

// implementing filter using .each

_.filter = function(array, callback) {
  
    let new_array = []

    _.each(array, function(value, i, list){
        if(callback(value , i , list ) === true) {
            new_array.push(value)
        }
    })
    return new_array

}