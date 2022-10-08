const subscriberModel=require("./models/subscribers");
const express = require('express');
const app = express()




// Your code goes here

// Get array of all subscribers from database 

app.get("/subscribers", (req, res) => { 
      const subscribers = req.params; 
      subscriberModel 
        .find(subscribers, { __v: 0 }) 
        .then((data) => { 
          res.json(data); 
        }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    });

// Get array of subscribers(an Object with only two fields name and subscribedChannel)

    app.get("/subscribers/names", (req, res) => { 
          const subscribers = req.params; 
          subscriberModel 
        .find({}).select('-_id -subscribedDate -__v')
        
        
            .then((data) => { 
              res.json(data); 
            }) 
            .catch((err) => { 
              console.log(err); 
            }); 
        });

      // Get array  a subscriber*(an object)* with given id

        app.get('/subscribers/:id', async (req, res) => {
            const findById =req.params.id
            try{
                const data = await   subscriberModel .findById(req.params.id);

                if(!data) {
                    error = Error ('error statement')
                    res.status(400).json({message :error.message} )
                    }
                     else { res.json(data)}

                 } catch(error){
                res.status(400).json({message: error.message})
            }}
        )

















module.exports = app;
