// ES6 Arrow Function 

console.log('hello world');

// const square = function (x) {
//     return x * x;
// }

// const square = (x) => {
//      return x * x;
// }

const square = (x) => x * x;

const y = square(5);
console.log(y)

// const event = {
//     name: 'Birthday Party',
//     guestList: ['Rahim', 'Karim', 'Hamim'],
//     printGuestList(){
//         console.log('Guest List for birthday party-', this.name);
//         this.guestList.forEach((guest) => {
//             console.log(guest + 'is attending ' + this.name);
//         })
//     }
// }

// event.printGuestList();

const event = {
        name: 'Birthday Party',
        guestList: ['Rahim', 'Karim', 'Hamim'],
        printGuestList(){
            console.log('Guest list for ', this.name);
            this.guestList.forEach((guest) => {
                console.log(guest, ' is attending the ', this.name);
            }) 
        }
    }

event.printGuestList();