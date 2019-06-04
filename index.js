const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// const db = require('./queries');
const {Pool, Client } = require('pg');


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

  


// app.get('/',(request, response) => {
//     response.json({ info: 'Node.js, Express, and Postgres API' })
// })


app.get('/',  async (request, response) => {
    const pool = new Pool({
        database: 'logistics',
        user: 'postgres',
        host: 'localhost',
        password: 'cgbnfvty1',
        port: '5400'
    });
    
    try {
        await pool.connect();    
        const res = await pool.query('SELECT id, site, name FROM "TestDatabase"."TestApp"');
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
});


// const text = 'INSERT INTO "TestDatabase"."TestApp" (id,site,name) VALUES ($1, $2, $3) RETURNING *'
// const values  = ['2','oahu','ayna'];

// app.get('/', async(request,response) => {
//     // Creds for Database
//     const pool = new Pool({
//         database: 'logistics',
//         user: 'postgres',
//         host: 'localhost',
//         password: 'cgbnfvty1',
//         port: '5400'
//     });

    


//     try {
//         const res = await pool.query(text, values)
//         console.log(res.rows[0]);
//     } catch (err) {
//         console.log(err.stack)
//     }


// })


// app.get('/', async(request,response) => {
//       // Creds for Database
//       const pool = new Pool({
//           database: 'logistics',
//           user: 'postgres',
//           host: 'localhost',
//           password: 'cgbnfvty1',
//           port: '5400'
//       });

// try {
//   const res = await pool.query('DELETE FROM "TestDatabase"."TestApp" WHERE id=1');
//   console.log(res);
// } catch(err) {
//   console.log(err)
// }

// });








app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});