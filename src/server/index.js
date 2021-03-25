// TODO: Configure the environment variables
const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 8081;

app.use(cors());
app.use(express.json());
// TODO: Configure express static directory.
// Change to dist
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile('dist/index.html')
});

// INFO: a route that handling post request for new URL that coming from the frontend
app.post("/analysis", async (req, res) => {
  const url = req.body.url;
  const endpoint = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`;
  try {
    const meaningcloudResponse = await axios(endpoint);
    const data = {
      text: meaningcloudResponse.data.sentence_list[0].text,
      score_tag: meaningcloudResponse.data.score_tag,
      agreement: meaningcloudResponse.data.agreement,
      subjectivity: meaningcloudResponse.data.subjectivity,
      confidence: meaningcloudResponse.data.confidence,
      irony: meaningcloudResponse.data.irony,
    };
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port ${PORT}!`);
});

module.exports = app
