const {MongoClient, ObjectID} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

const insertDocs = (db, callback) => {
  // Get the documents collection
  const collection = db.collection('Todos');
  
  // deleteOne
  // collection.deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });
  
  // deleteMany
  // collection.deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });
  
  // findOneAndDelete
  collection.findOneAndDelete({_id: new ObjectID('5b51903d25d5fa27865c10b4')}).then((result) => {
    console.log(result);
  });
  
};  
  

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log('Unable to connect to server');
  }
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  insertDocs(db, () => {
    // client.close();
  });
});