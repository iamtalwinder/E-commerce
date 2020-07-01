import React, { useEffect } from "react";
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
		return <h1>p</h1>;
	}
}

export default HomeScreen;
