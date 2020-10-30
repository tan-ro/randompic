const express = require("express");
const app = express();

app.use(express.json());

app.post("/content/resources/find", async (request, response) => {
  response.send({
    type: "SUCCESS",
    resources: [
      {
        type: "IMAGE",
        id: "123456",
        name: "Animal",
        url: "http://lorempixel.com/1200/700/animals",
        thumbnail: {
        url: "http://lorempixel.com/500/333/animals",
          width: 500,
          height: 333  
        },
        contentType: "image/jpeg"
      },

      {
        type: "IMAGE",
        id: "456123",
        name: "Nature",
        url: "http://lorempixel.com/1200/700/nature",
        thumbnail: {
        url: "http://lorempixel.com/500/333/nature",
          width: 500,
          height: 333
        },
        contentType: "image/jpeg"
      }
    ]
  });
});

app.listen(process.env.PORT || 3000);