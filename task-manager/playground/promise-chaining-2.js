require('../src/db/mongoose');

const User = require('../src/models/user');

// Task.findOneAndDelete({ _id: '65d42ed5629445ffc9911c41' }).then((task) => {
//    console.log(task);
//    return Task.countDocuments({ completed: true });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//   console.log(e);
// });


const deleteUserAndCount = async (id) => {
    const user = await User.findByIdAndDelete(id);
    const count = await User.countDocuments();
    return count;
};

deleteUserAndCount('65b7459c02141a8e150f3954')
    .then((count) => {
        console.log(count);
        console.log('The record is deleted');

    })
    .catch((e) => {
        console.log(e);
    });
