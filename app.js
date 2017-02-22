var pg = require('pg');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();



const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://'+ process.env.POSTGRES_USER + ':'+ process.env.POSTGRES_PASSWORD + '@localhost/bulletinboard');


// sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(function (err) {
//     console.log('Unable to connect to the database:', err);
//   });

app.use(express.static('style'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');


var Message = sequelize.define('messages', {
    title: Sequelize.TEXT,
    body:  Sequelize.TEXT,
    	
});

app.get('/saa', (req, res) => {
  res.send("piew")
})

app.get('/', (req, res) => {
	res.render('page1');
});

// app.get('/page2', (req, res) => {
// sequelize
//     .sync()
//     .then(function(){
//       var messages = Message.findAll({ limit: 13})
//     .then(function(messages) {
//       res.render('page2', {posts: messages, status: ""})
//     });
//   });
// });

app.get('/page2', (req, res) => {
  Message.findAll()
  .then((allMessages) => {
    res.render('page2', { randomKey : allMessages });
  });
});




app.post('/page2', (req, res) => {
	
//   const subjectPutin = req.body.subject
// 	const messageInput = req.body.message

// // sequelize
// // .sync()
// // .then(function(){
// 	// return 

//   Messages.create({


// 		title: subjectPutin,
// 		body: messageInput


// 	}); //NO AND THEN


    Message.create({  //creating new rows in table (sequelize) 

        title: req.body.titlename, 
        body: req.body.bodyname
    }) 


    .then(function() {

	     res.redirect('/page2')

});

});

sequelize
  .sync({force: true})

  .then(function(){





app.listen(3000, () => {
	console.log('Imma cut u up!');
  });

});


