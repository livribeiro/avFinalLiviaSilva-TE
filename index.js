const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const notificationserv = require('./src/controller/customer.controller')

const router = express.Router()

router.get('/api/v1/notifications', notificationserv.listNotification)
router.post('/api/v1/notifications', notificationserv.creatNotification)
router.delete('/api/v1/notifications/:id', notificationserv.removeNotification)

app.use('/', router)

const porta = process.env.PORT;

app.listen(porta || 8080)