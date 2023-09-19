require('dotenv').config()

const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 4000;
const pool = require('./db');

const app = express();

app.get("/", (req, res)=>{
    res.send(`Welcome...${process.env.MESSAGE}`)
})

// Get all users
app.get('/users', async (req, res) => {
     try {
      const users = await pool.query('SELECT * FROM users')
      res.json(users.rows)
        } catch (err) {
            console.error(err)
        }
    })



// Add new user
app.post('/users', async (req, res) => {
    const { username, email, hashed_password } = req.body
    console.log("New user data:",  username, email, hashed_password)
    try{
      const newUser = pool.query(`INSERT INTO users(username, email, hashed_password) VALUES($1, $2, $3)`, 
      [username, email, hashed_password])
      res.json(newUser)
  
    }
    catch(err){
      console.error(err)
    }
  })

app.listen(port, ()=> console.log("API srvr is running . . ."))