const mockAPIResponse = require('./mockAPI.js')
const PORT = 8081
const axios = require("axios")
// TODO add Configuration to be able to use env variables
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);
const MEAN_CLOUD_API_KEY = process.env.API_KEY
const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'

// TODO: Create an instance for the server
var express = require('express')
const app = express()

// TODO: Configure cors to avoid cors-origin issue
const cors = require('cors');
app.use(cors())
// TODO: Configure express to use body-parser as middle-ware.
var bodyParser  = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
// TODO: Configure express static directory.
app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})
// INFO: a route that handling post request for new URL that coming from the frontend
app.post('/add-url', async (req, res) => {
    try {
        const url = req.body.url
        
        const articleURL = `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${url}&lang=en`
        const data = await axios.post(articleURL)
        const response = {
            text: data.data.sentence_list[0].text,
            score_tag : data.data.score_tag,
            agreement : data.data.agreement,
            subjectivity : data.data.subjectivity,
            confidence : data.data.confidence,
            irony : data.data.irony
          }
          console.log(response);
          res.send(response)
        

        /* TODO:
    1. GET the url from the request body
    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sample = {
       text: '',
       score_tag : '',
       agreement : '',
       subjectivity : '',
       confidence : '',
       irony : ''
     }
  */
    } catch (error) {
        console.log(error.message)
        res.send("error")

    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// TODO: export app to use it in the unit testing
module.exports = { app };
