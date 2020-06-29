import express from "express";
import path from "path";
import "./dotenv";
import data from "./data";

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/products/:id", (req, res) => {
	const productId = parseInt(req.params.id);
	const product = data.products.find((x) => x.id === productId);
	if (product) res.status(200).send(product);
	else res.status(404).send({ msg: "Product Not Found." });
});

app.get("/api/products", (req, res) => {
	res.status(200).send(data.products);
});

app.listen(process.env.PORT, () =>
	console.log(`Running at: http://localhost/${process.env.PORT}`)
);
