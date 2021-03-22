const express = require("express");
const {
  fetchAllPost,
  fetchSinglePost,
  createPost,
  updatePost,
  deletePost,
} = require("./../controllers/post");

const router = express.Router();

router.get("/fetchallpost", fetchAllPost);
router.get("/fetchsinglepost:id", fetchSinglePost);
router.post("/createpost", createPost);
router.patch("/updatepost:id", updatePost);
router.delete("/deletepost:id", deletePost);

module.exports = router;
