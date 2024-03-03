// functions/serve-json.js
module.exports = (req, res) => {
  res.status(200).json({ message: "Hello from serverless function!" });
};
