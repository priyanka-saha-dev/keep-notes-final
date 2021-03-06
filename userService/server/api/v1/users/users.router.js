const router = require('express').Router();
const controller = require('./users.controller');

const log = require('../../../logging');

router.post('/login', (req, res) => {
    log.info('user login route');
    controller.login(req.body).then((response) => {
        res.status(response.status).send(response);

    }).catch((error) => {
        res.status(error.status).send(error);
    });
});

router.post('/register', (req, res) => {
    log.info('user register route');
    controller.register(req.body).then((response) => {
        log.info('register response', response);
        res.status(response.status).send(response);

    }).catch((error) => {
        res.status(error.status).send(error);

    });
});

router.get('/getUsers', (req, res) => {
    log.info('getUsers route');

    controller.getAllUsers().then((response) => {
        log.info('getAllUsers response', response);
        res.status(response.status).send(response);

    }).catch((error) => {
        res.status(error.status).send(error);

    });
});

router.get('/', (req, res) => {
    res.send('Users API');
});

module.exports = router;