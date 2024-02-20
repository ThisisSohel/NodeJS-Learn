require('../src/db/mongoose');

const User = require('../src/models/user');

// User.findOneAndUpdate({_id: '65b7459c02141a8e150f3954'}, {age: 1000}, {new: true}).then((user)=>{
//    console.log(user);
//    return User.countDocuments({age: 1000});
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// });


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}


updateAgeAndCount ('65b742ebeabe42f40cc31d3c', 222).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})