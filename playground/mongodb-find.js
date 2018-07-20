const {MongoClient, ObjectID} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

const insertUser = (db, callback) => {
  // Get the documents collection
  const collection = db.collection('Todos');
  // Insert some documents
  collection.find().count().then((docs) => {
    console.log(`Todos count: ${docs}`);
  }, (err) => {
    console.log('Unable to fetch todos', err)
  });
};

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log('Unable to connect to server');
  }
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  insertUser(db, () => {
    // client.close();
  });
});