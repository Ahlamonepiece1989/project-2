const express = require("express");
const cors = require('cors')
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors())

const products = [
  { title: "The Giraffe Onesie", price: 57, imgLink: "pic.jpg", liked: false},
  { title: "GP Crowd Adult Tee", price: 65, imgLink: "cropped.jpg",  liked: false},
  { title: "Cara Top Print", price: 63, imgLink: "ttt.jpg", liked: false},
  { title: "Summer Dream Set", price: 64, imgLink: "eee.jpg", liked: false },
  { title: "Twirler Skirt", price: 62, imgLink: "skirt.jpg", liked: false },
 { title: "Summer Secret Dress", price: 89, imgLink: "www.jpg", liked: false },
  { title: "Diana Dress", price: 111, imgLink: "aaa.jpg", liked: false },
  { title: "Kate Top", price: 59, imgLink: "ddd.jpg", liked: false }

];



app.get("/products", (req, res) => {
  res.status(200);
  res.json(products);
});


app.get("/product", (req, res) => {
  const product = req.query.name;

  const found = products.find((element) => {
    return element.name === product;
  });

  if (found) {
    res.status(200);
    res.json(found);
  } else {
    res.status(404);
    res.json("Product not found");
  }
});


app.put("/product", async  (req, res) => {


  const product = req.query.title;

  console.log(req.query);

  products.find((element) => {
  	if(element.name === product){

    element.title = req.query.title;
    element.price = req.query.price;
    element.imgLink = req.query.imgLink;
    element.liked = req.query.liked;



  	}

    


  });
});




app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});


app.delete('/product', (req, res) => {
 const product = req.query.name;

  const found = products.find((element) => {
    return element.name === product;
  });


 products.splice(found, 1);

 return res.send();
});