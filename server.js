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

app.post('/', function (req, res) {
    console.log(req.body)

    if (req.body.currency === 'AZN') {
        return res.send({
            "Receipt": [
                {
                    "id": "s23f34g45vn6j4gy5k64bj3ldl428gs",
                    "date": "2018-12-17T05:31:25",
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
                        "value": "15.35",
                        "currency": "AZN"
                    }
                }
            ]
        })
    }
    else {
        return res.status(400).send({
            message: 'This is an error!'
        });
    }

})