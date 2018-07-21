const {MongoClient, ObjectID} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

const insertDocs = (db, callback) => {
  // Get the documents collection
  const collection = db.collection('Users');
  
  collection.findOneAndUpdate({
    _id: new ObjectID('5b4f9d423c02e22c6ce603b4')
  }, {
    $set: {
      name: 'omar'
    },
    $inc: {
      age: 4
    }
  }, {
    returnOriginal: false
  }).then((result) => {
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