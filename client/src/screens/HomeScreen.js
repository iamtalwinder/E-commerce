import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";

function HomeScreen() {
	const productList = useSelector((state) => state.productList);
	const { products, loading, error } = productList;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listProducts());

		return () => {
			//
		};
	}, []);

	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>error...</h1>;
	if (products) {
		console.log(products);
		return (
			<ul className="products">
				{products.map((product) => (
					<li key={product.id}>
						<div className="product">
							<Link to={"/product/" + product.id}>
								<img
									className="product-image"
									src={product.image}
									alt="product"
								/>
							</Link>
							<div className="product-name">
								<Link to={"/product/" + product.id}>{product.name}</Link>
							</div>
							<div className="product-brand">{product.brand}</div>
							<div className="product-price">${product.price}</div>
							<div className="product-rating">
								{product.rating} Stars ({product.numReiews} Reviews)
							</div>
						</div>
					</li>
				))}
			</ul>
		);
	}
}

export default HomeScreen;
