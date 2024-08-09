const express = require('express');
const router = express.Router();


const usersController = require('../controller/users-controller');
const MiddlewaresUsers = require('../middlewares/users-middlewares')

router.post(
    "/users",MiddlewaresUsers.insertUserMiddleware, usersController.createUser);

router.get('/user/:id' ,MiddlewaresUsers.getUserByIdMiddleware ,usersController.getUserById);

router.delete('/user/:id',MiddlewaresUsers.deleteUserByIdMiddleware, usersController.deleteUserById

);



module.exports = router;