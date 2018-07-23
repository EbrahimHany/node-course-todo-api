const mongodb = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '6b538e6b5428bd2a683f53ff';

// if (!mongodb.ObjectID.isValid(id)) {
//   console.log('Id not valid')
// }


// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('todos', todos);
// });
// 
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('todo By id', todo);
// }).catch((e) => {
//   console.log(e);
// 

User.findById(id).then((user) => {
  if(!user) {
    return console.log('Unable to find user')
  }
  
  console.log(user)
}).catch((e) => console.log(e));