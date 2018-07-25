const mongodb = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// findOneAndRemove
// findByIdAndRemove

// Todo.findOneAndRemove({_id: '5b58efac29cd7a467050ceb4'}).then((todo) => {
// 
// });

Todo.findByIdAndRemove('5b58efac29cd7a467050ceb4').then((todo) => {
  console.log(todo);
});