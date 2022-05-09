'use strict'
const AuthRouter = require("express").Router();
const AuthControler = require("../controller/auth.controller")


AuthRouter.post('/login', AuthControler.login);

module.exports = AuthRouter;