const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();

// app.use((req, res, next) => {
//     if(req.method === 'GET'){
//         res.status(400).send('GET requests are disable');
//     }else{
//         next();
//     }
// });

// app.use((req, res, next) => {
//     res.status(503).send('This aplication is in maintenace. Check back soon!')
// });

// const multer = require('multer');
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {

//         if(!file.originalname.match(/\.(doc|docx)/)){
//             return cb(new Error('Please upload a Word file'));
//         }

//         return cb(undefined, true);
//     }
// });

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send();
// }, (error, req, res, next) => {
//     res.status(400).send(error.message);
// });

app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

// const Task = require('./models/task');
// const User = require('./models/user');
// const main = async () => {
//     // const task = await Task.findById('636d843afff1a3b65bd1bca1');
//     // await task.populate('owner');
//     // console.log(task.owner);

//     const user = await User.findById('636d8422fff1a3b65bd1bc9b');
//     await user.populate('tasks');
//     console.log(user.tasks);
// }

//main();

module.exports = app;