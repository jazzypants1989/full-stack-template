// 1.) Initialize npm and insall dependencies
// -Express, dotenv, cors, mongodb, ejs, nodemon(--save-dev)
// 2.) Require dependencies
const express = require ('express')
const app = express()
const MongoClient = require ('mongodb').MongoClient
const cors = require ('cors')
require ('dotenv').config()
// 3.) Declare variables
let db,
dbConnectionString = proccess.env.DB_STRING,
dbName = 'sample_mflix',
collections

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
        collection = db.collection('movies')
    }