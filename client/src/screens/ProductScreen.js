import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";

function ProductScreen(props) {
	const productDetails = useSelector((state) => state.productDetails);
	const { product, loading, error } = productDetails;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(detailsProduct(props.match.params.id));
	}, []);
	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>Error</h1>;
	console.log(product);
	return <h1>Product</h1>;
}

export default ProductScreen;
