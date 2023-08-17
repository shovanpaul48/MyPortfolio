const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Replace the connection string with your actual MongoDB Atlas connection string
const mongoUrl = 'mongodb+srv://shovan:<password>@cluster0.mfagvih.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'Project';
const collectionName = 'Project';

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
    const inputUsername = req.body.username;
    const inputPassword = req.body.password;

    MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            res.send('Error connecting to MongoDB');
            return;
        }

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        collection.findOne({ username: inputUsername, password: inputPassword }, (err, user) => {
            if (err) {
                console.error('Error finding user:', err);
                res.send('Error finding user');
                return;
            }

            if (user) {
                console.log('User found:', user);
                // Perform actions for authenticated user (e.g., insert data)
                // For demonstration, let's insert a document
                collection.insertOne({ name: 'Sample Data' }, (err, result) => {
                    if (err) {
                        console.error('Error inserting data:', err);
                    } else {
                        console.log('Data inserted successfully');
                    }
                    client.close();
                    res.send('Logged in and data inserted successfully');
                });
            } else {
                console.log('User not found');
                client.close();
                res.send('User not found');
            }
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
