//server.js
const express = require("express");
const mongoose = require("mongoose");

const items = require("./models/MenueModels");
const user = require("./models/UserModels");
const cors = require("cors");

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/getitems", async (req, res) => {
  try {
    const disitems = await items.find({});
    res.status(200).json(disitems);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/getuserdetails", async (req, res) => {
  try {
    const userdetails = await user.find({});
    res.status(200).json(userdetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post("/addmenueitem", async (req, res) => {
  try {
    const item = await items.create(req.body);
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
app.post("/registrenewuser", async (req, res) => {
  try {
    const userdetails = await user.create(req.body);
    res.status(200).json(userdetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


// Update menu item price
app.put("/updateprice/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const { price } = req.body;

    
    if (!price) {
      return res.status(400).json({ message: "Price is required" });
    }

   
    const updatedItem = await menueitems.findByIdAndUpdate(
      itemId,
      { $set: { price: price } },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});


mongoose
  .connect("mongodb+srv://naveenmadipalli2911:D23ADs2Aeivrz7oH@cluster0.zbt5w2x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
