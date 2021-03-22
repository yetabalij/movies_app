const { post } = require("../routes/routes");

//fetch all post controller
exports.fetchAllPost = async (req, res) => {
  res.send("fetch all post");
};

//fetch by Id
exports.fetchSinglePost = async (req, res) => {
  res.send("fetch single post");
};

//create a post
exports.createPost = async (req, res) => {
  res.send("create a post");
};

//update post
exports.updatePost = async (req, res) => {
  res.send("update post");
};

//delete a post
exports.deletePost = async (req, res) => {
  res.send("delete post");
};
