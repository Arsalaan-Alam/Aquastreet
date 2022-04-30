# Aquastreet



There are two branches. Front-end is placed under **Main** & Backend is in **Backend**

```
Backend is broken into two different parts.

(i) Lambda Functions <-> Rekognition
(ii) TF-Lite model for microcontrollers
```

Amazon Rekognition Custom Labels is a feature of Amazon Rekognition that enables customers to build their own specialized machine learning (ML) based image analysis capabilities to detect unique objects and scenes integral to their specific use case. Instead of having to train a model from scratch, which requires specialized machine learning expertise and millions of high-quality labeled images, customers can use Amazon Rekognition Custom Labels to achieve state-of-the-art performance for their unique image analysis needs.

AWS Rekognition is an image detection service that employs deep learning technology to analyze image content. The AWS Rekognition function allows you to identify objects, people, texts, activities, and inappropriate content in images.



Watkins Marine Mammal Sound Database : https://cis.whoi.edu/science/B/whalesounds/index.cfm


Resources : 

- https://esme.bu.edu
- https://go.aws/3l56nmA
- https://go.aws/2YhMsba
- https://go.aws/3ouhnfa
- https://bit.ly/3ipRp92


### Architecture

![Architecture.png](https://i.postimg.cc/vZxKND24/Architecture.png)


### Usage

```
• Go to AWS & cd/server
• Update your own AWS credentials inside config.json
• Save changes & push to production
```

### Calling the methods 
Using Postman

* **POST /predict**
```
POST /predict HTTP/1.1
Host: localhost:${process.env.PORT}
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

photo=<pic_source : FormData : (format)>
```

Note :

- Don't forget to create your own Bucket for local development.
- If you are going to use analyze S3 hosted images/videos then create S3 bucket with relevant permissions.
- input : filepath of .jpg or .png image [Default] || pass .mp4 or .mkv on bypass ./route.
- Image is not stored on DynamoDB although that's a part for future development.
- Also, SNS is on the waiting list.


#### For TFlite, it's been trained with few audio samples that we gathered from [Here](https://cis.whoi.edu/science/B/whalesounds/index.cfm)

