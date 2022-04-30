require ('prism-media');
require ('newrelic');
require ('sharp');

const extractFrames = require('ffmpeg-extract-frames');
const path = require('path');
const fs = require('fs')
const express = require('express');
const uuidv4 = require('uuid/v4');
const app = express();
const port = process.env.PORT || 3003

app.get('/', async (req, res) => {
    offsetMilisecs = req.query["offsetMilisecs"]
    url = req.query.url
    fileName = path.join(__dirname, "./imgs_" + uuidv4() + ".jpg"); // .png is heavier

    await extractFrames({
        input: url,
        output: fileName,
        offsets: [
            offsetMilisecs
        ]
      });

    res.sendFile(fileName, function (err) {
      if (err) {
        console.error(err);
        res.status(500).end();
      }
      try {
        fs.unlinkSync(fileName);
      } catch(e) {
        console.log("error removing ", fileName, e)
      }
    });
})

app.listen(port, () => console.log(`App listening on port ${port}!`)) // Debug



/*

## Usage
Create `GET` request to:  `http://localhost:3000/?offsetMilisecs={offsetMilisecs}&url={video-url}`

## Resource Endpoints
US West (N. California)	        us-west-1	        rekognition.us-west-1.amazonaws.com                 HTTPS       [Replace with own]

                                                    rekognition-fips.us-west-1.amazonaws.com            HTTPS       [Replace with own]

*/