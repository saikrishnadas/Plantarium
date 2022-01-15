import Product from "../../models/product";
import dbConnect from "../../utils/mongo";

export default async function addProduct(req, res) {
  const { method } = req;
  dbConnect();

  if (method === "GET") {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
