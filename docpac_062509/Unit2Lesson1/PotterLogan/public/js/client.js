require('dotenv').config()
fs = require('fs')
http = require('http')
url = require('url')
express = require('express')
app = express();
const PORT = process.env.PORT

app.use(express.static(path.join(__dirname, 'public')))