// we will use call back function in asynchronous way

// setTimeout(() => {
//     console.log('Two sec are up')
// }, 2000);

// const names = ['Rahim', 'Karim', 'Hamim'];
// const shortName = names.filter((name) => {
//     return name.length <=4 ;
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000);
// }




// geocode('philadelphia', (data) => {
//     console.log(data);
// });



//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
const time = 2000
const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a+b)
    }, time);
}
add(1, 4, (sum) => {
    console.log("After passing " + time + ' ms the result of sum is ' + sum) // Should print: 5
})


