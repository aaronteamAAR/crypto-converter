const PORT = 8080
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()


const app = express()

app.use(cors())

app.get('/', (req,res) => {
    res.json('Hey from the backend') 
}) 

app.get('/converter', (req,res) => {
    const curparams = req.query.to_currency
    const exparams = req.query.from_currency
    const options = {
        method: "GET",
        url: "https://alpha-vantage.p.rapidapi.com/query",
        params: {
          from_currency: exparams,
          function: "CURRENCY_EXCHANGE_RATE",
          to_currency: curparams,
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
        },
      };
  
      axios
        .request(options)
        .then((response) => {
            res.json(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])

        })
        .catch((error) => {
          console.error(error);
        });
}) 

app.get('/news', (req,res) => {
    const options = {
        method: "GET",
        url: "https://cryptocurrency-news-live.p.rapidapi.com/bitcoin-news",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "cryptocurrency-news-live.p.rapidapi.com",
        },
      };
  
      axios
        .request(options)
        .then(function (response) {
          res.json(response.data);
         
        })
        .catch(function (error) {
          console.error(error);
        });
})


app.listen(8080, () => console.log(`Backend Activated on port ${PORT}`))