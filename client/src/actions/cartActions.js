import {
	ADD_ITEM_TO_CART,
	REMOVE_ITEM_FROM_CART,
} from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (productId, qty) => async (dispatch) => {
	try {
		const { data } = await axios.get(`/api/products/${productId}`);
		dispatch({
			type: ADD_ITEM_TO_CART,
			payload: {
				id: data.id,
				brand: data.brand,
				name: data.name,
				image: data.image,
				price: data.price,
				countInStock: data.countInStock,
				qty,
			},
		});
	} catch (err) {}
};

export const removeFromCart = (productId) => async (dispatch) => {
	dispatch({ type: REMOVE_ITEM_FROM_CART, payload: productId });
};
