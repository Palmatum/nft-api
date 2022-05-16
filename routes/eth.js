const express = require("express");
const getEth = require("../controllers/getEth");
const router = express.Router();

router.get("/", getEth);

module.exports = router;
