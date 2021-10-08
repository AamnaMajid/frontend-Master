/* Looping ex 4
 destructuring nested data structure to extract color props

   var  suspects= [
        {
            name: "Rusty",
            color: "orange",
        },
        {
            name: 'sacrlet',
            color: 'red'
        }
    ]

 */

var [color1, color2] = [suspects[0].color, suspects[1].color]


