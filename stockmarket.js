const express = require('express')
const bodyParser = require('body-parser');
const redis = require('./database/redis')

const app = express()
const port = 3000

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.json())

app.post('/stockMarket', async (req, res) => {
    try {
        const stocks = req.body.data
        for (let stock of stocks) {
            const resp = await redis.set(stock.googleCode, JSON.stringify(stock))
            console.log(stock.googleCode, `Response ::: `, resp)
        }
        res.send('Stock Market Object Created')
    } catch(err) {
        console.error(err)
        res.send('Internal Server Error Occured')
    }
})

app.post('/currency', async (req, res) => {
    try {
        const currencies = req.body.data
        for (let currency of currencies) {
            const resp = await redis.set(currency.googleCode, JSON.stringify(currency))
            console.log(currency.googleCode, `Response ::: `, resp)
        }
        res.send('Currency Rate Object Created')
    } catch(err) {
        console.error(err)
        res.send('Internal Server Error Occured')
    }
})

app.listen(port, async () => {
    console.log(`Listening on ${port}`)
})