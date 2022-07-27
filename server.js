// 1.) Initialize npm and insall dependencies
// -Express, dotenv, cors, mongodb, ejs, nodemon(--save-dev)
// 2.) Require dependencies
const express = require ('express')
const app = express()
const MongoClient = require ('mongodb').MongoClient
const cors = require ('cors')
const PORT = 8000
require ('dotenv').config()
// 3.) Declare variables -- THIS IS PROBABLY WHERE YOU SCREWED UP
let db,
dbConnectionString = process.env.DB_STRING,
dbName = 'sample_mflix',
collection

// 4.) Connect to MongoDB

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to Database') // or whatever you want to greet yourself with
        db = client.db(dbName)
        collection = db.collection('movies') // make sure you change this variable.
    })

//8.) Set middleware
app.use('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded(extended: true))
app.use(express.json())
app.use(cors())

//10.) Assign all CRUD routes

app.get('/', async (req, res) => {
    try{ 
        res.render('index.ejs')
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})