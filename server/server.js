const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000
const data = require('./data.json')


app.use(cors());
app.use(express.json());

app.get('/payment/categories', (req, res) => {
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/payment/new', function (req, res) {
    console.log(req.body)

    return res.send(

        {
            "id": "s23f34g45vn6j4gy5k64bj3ldl428gs",
            "date": new Date(),
            "details": [
                {
                    "k": "Service",
                    "v": "Bakcel"
                },
                {
                    "k": "Subscriber",
                    "v": "+994 55 555 66 77"
                }
            ],
            "amount": {
                "value": req.body.amount.amount,
                "currency": "AZN"
            }
        }
    )

    // return res.status(404).send({
    //     message: 'Yalnız AZN ilə ödəniş edə bilərsiniz'
    // });


})