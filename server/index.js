let express = require('express');
const { Sequelize } = require('sequelize');


const init = async () => {
    // instantiate rest app
    let app = express();
    
    // // connect to the sql db
    // const sequelize = new Sequelize('nzteam', 'mike.treadgold', 'mtnz99', {
    //     dialect: 'mysql',
    //     dialectOptions: {
    //         host: 'rekall',
    //         multipleStatements: true
    //         // Your mysql2 options here
    //     }
    //     })
    
    try {
        // await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    
    app.get('/techwriters', (req,res) => {
        // TODO: DO THIS HERE!
        const out = [
            {
              "id": 1,
              "first_name": "Dennis",
              "last_name": "Thorpe",
              "email": "dennis.thorpe@kiwiplan.com",
              "gender": "Male",
              "img": "/Dennis.jpg"
        
            },
            {
              "id": 2,
              "first_name": "Guy",
              "last_name": "Halpe",
              "email": "guy.halpe@kiwiplan.com",
              "gender": "Male",
              "img": "/Guy.jpg"
        
            },
            {
              "id": 3,
              "first_name": "Janet",
              "last_name": "Stevenson",
              "email": "janet.stevenson@kiwiplan.com",
              "gender": "Female",
              "img": "/Janet.jpg"
        
            },
            {
              "id": 4,
              "first_name": "Mike",
              "last_name": "Treadgold",
              "email": "mike.treadgold@kiwiplan.com",
              "gender": "Male",
              "img": "/Dennis.jpg"
        
            },
            {
              "id": 5,
              "first_name": "Paul",
              "last_name": "Erith",
              "email": "paul.erith@kiwiplan.com",
               "gender": "Male",
               "img": "/Paul.jpg"
        
            },
            {
              "id": 6,
              "first_name": "Seth",
              "last_name": "Delpachitra",
              "email": "seth.delpachitra@kiwiplan.com",
               "gender": "Male",
               "img": "/Seth.jpg"
        
            }
          ]
        return res.json(out)
    });
    
    app.get('/techwriter/:firstname', (req,res) => {
        const { params } = req;
        return res.json(params);
        
    });
    
    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
}

init()
