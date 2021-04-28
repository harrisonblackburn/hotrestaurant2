// Create New Characters - takes in JSON input
// two step process with express
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
      customerName: 'Harrison Blackburn',
      phoneNumber: '609-915-4077',
      email: 'kjh@yahoo.com',
      uniqueID: 'blackbhr',
    
    },
    {
      customerName: 'Pete',
      phoneNumber: '5445557788',
      email: 'pete@gmail.com',
      uniqueID: 'pete b',
    
    },
    {
      customerName: 'james',
      phoneNumber: '6309998877',
      email: 'james@yahoo.com',
      uniqueID: 'james',
      
    },
    {
      customerName: 'lew',
      phoneNumber: '6309998879',
      email: 'lew@yahoo.com',
      uniqueID: 'lew',
      
    },
  ];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));

app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'add.html')));

app.get('/view', (req, res) => res.json(tables));


app.post('/api/tables', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    // const newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    tables.customerName = tables.customerName.replace(/\s+/g, '').toLowerCase();
    console.log(newTable);
  
    tables.push(newTable);
    res.json(newTable);
  });

  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));