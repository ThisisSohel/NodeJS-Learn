const tasks = {
    tasks: [{
        text: 'Grocery Shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'File course',
        completed: false
    }],
// In simple function way

    // getTaskToDo(){
    //    const taskToDo = this.tasks.filter((task) => {
    //        return task.completed === false
    //    })
    //    return taskToDo;
    // }

//In arrow function
//     getTaskToDo(){
//         return this.tasks.filter((task) => {
//             return task.completed === false
//      })
//   }
// }


//In arrow function another way
getTaskToDo(){
    return this.tasks.filter((task) => task.completed === false)
   }
   
}






console.log(tasks.getTaskToDo());