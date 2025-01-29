const express = require('express');
const cors = require('cors');
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
} catch (error) {
    res.status(500).json({ message : "Error obtaining products"});
}
});

// create a new product
router.post("/", async (req, res) => {
    const { name, description, price, category, imageUrl } = req.body;

    const newProduct = new Product({ name, description, price,category, imageUrl });
    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: "Error creating product"});
    }
});

// update a product by id
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category, imageUrl } = req.body;

    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, description, price, category, imageUrl },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({
            message: "Error updating product"
        });

    }
});

// delete a product by id
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "the produc has been eliminated succesfully"});
    } catch (error) {
        res.status(500).json({ message: "Error deleting product"});
    }
});

module.exports = router;




