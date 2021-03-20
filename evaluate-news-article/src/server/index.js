const mockAPIResponse = require('./mockAPI.js')
const PORT = 8081
const axios = require("axios")
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);
const MEAN_CLOUD_API_KEY = process.env.API_KEY
const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'

var express = require('express')
const app = express()

const cors = require('cors');
app.use(cors())
var bodyParser  = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
})
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
    

    } catch (error) {
        console.log(error.message)
        res.send("error")

    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

module.exports = { app };
