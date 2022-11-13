require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('63626db467df06bf075e0d0c', {age: 11})
//     .then((user) => {
//         console.log('User:', user);
//         return User.countDocuments({age: 11});
//     })
//     .then((qtd) => {
//         console.log(`Count: ${qtd}`);
//     })
//     .catch(console.error);

const updateAgeAndCount = async (id, age) => {

    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({age});

    return count;

};

updateAgeAndCount('63626db467df06bf075e0d0c', 22)
    .then(console.log)
    .catch(console.error);