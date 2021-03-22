const express = require("express");
const { fetchAllPost } = require("./../controllers/post");

const router = express.Router();

router.get("/", fetchAllPost);

module.exports = router;
