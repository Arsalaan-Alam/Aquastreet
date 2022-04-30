// const AWS = require('aws-sdk')
// AWS.config.update({region: 'us-west-1'})
var rekognition = new AWS.Rekognition()

exports.handler = (event, context, callback) => {
  var params = {
    Image: {
      S3Object: {
      Bucket: "AWS_BUCKET", 
      Name: "public/" + event.imageInfo
      }
    }, 
    Attributes: [
      'ALL'
    ]
  };

 
  rekognition.detectLabels(params, function(err, data) {
   if (err) {
    callback(null, {
     data: JSON.stringify(err.stack)
    })
   } else {
    const myData = JSON.stringify(data)
    callback(null, {
        data: myData
    })
   }
 });
};