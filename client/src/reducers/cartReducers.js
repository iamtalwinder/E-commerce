import {
	ADD_ITEM_TO_CART,
	REMOVE_ITEM_FROM_CART,
} from "../constants/cartConstants";

export const cartReducer = (state, action) => {
	if (state === undefined) return { cartItems: [] };

	switch (action.type) {
		case ADD_ITEM_TO_CART:
			const item = action.payload;
			const product = state.cartItems.find(
				(cartItem) => cartItem.id === item.id
			);
			if (product) {
				return Object.assign({}, state, {
					cartItems: state.cartItems.map((cartItem) =>
						cartItem.id === product.id ? item : cartItem
					),
				});
			}

			return Object.assign({}, state, {
				cartItems: [...state.cartItems, item],
			});

		case REMOVE_ITEM_FROM_CART:
			return {
				cartItems: state.cartItems.filter(
					(cartItem) => cartItem.id !== action.payload
				),
			};

		default:
			return state;
	}
};
