require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndUpdate('636275e1172e0bdbbc7c1c30', {completed: true})
//     .then((task) => {
//         console.log('Task:', task);
//         return Task.countDocuments({completed: false});
//     })
//     .then((qtd) => {
//         console.log(`Count: ${qtd}`);
//     })
//     .catch(console.error);

const markTaskCompletedAndCount = async (id) => {
    await Task.findByIdAndUpdate(id, {completed: true});
    return await Task.countDocuments({completed: false});
};

markTaskCompletedAndCount('63626354656c046393e98fd1')
    .then(console.log)
    .catch(console.error);