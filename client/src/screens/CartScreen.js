import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";

function CartScreen(props) {
	let productId, qty;
	if (props.location.state) {
		productId = props.location.state.id;
		qty = props.location.state.qty;
	}

	const cart = useSelector((state) => state.cart);

	const dispatch = useDispatch();
	useEffect(() => {
		if (productId && qty) {
			dispatch(addToCart(productId, qty));
		}
	}, []);

	const removeFromCartHandler = (productId) => {
		dispatch(removeFromCart(productId));
	};

	const checkoutHandler = () => {};

	return (
		<div className="cart-container">
			<div className="cart-list">
				<ul className="cart-list-container">
					<li>
						<h3>Shopping cart</h3>
						<div>Price</div>
					</li>
					{cart.cartItems.length === 0 && <h3>Cart is empty</h3>}
					{cart.cartItems.length &&
						cart.cartItems.map((product) => (
							<li key={product.id}>
								<img src={product.image} alt="product" className="cart-image" />
								<div className="cart-name">
									<Link className="product-name" to={`/product/${product.id}`}>
										{product.name}
									</Link>
									<div>
										Qty:
										<select
											value={product.qty}
											onChange={(e) =>
												dispatch(addToCart(product.id, e.target.value))
											}
										>
											{[...Array(product.countInStock).keys()].map((x) => (
												<option key={x + 1} value={x + 1}>
													{x + 1}
												</option>
											))}
										</select>
										<button
											type="button"
											onClick={() => removeFromCartHandler(product.id)}
										>
											Delete
										</button>
									</div>
								</div>
								<div className="cart-price">${product.price}</div>
							</li>
						))}
				</ul>
			</div>
			<div className="cart-action">
				<h3>
					Subtotal ( {cart.cartItems.reduce((a, c) => a + parseInt(c.qty), 0)}{" "}
					items) : ${" "}
					{cart.cartItems.reduce((a, c) => a + c.price * parseInt(c.qty), 0)}
				</h3>
				<button
					onClick={checkoutHandler}
					className="button primary full-width"
					disabled={cart.cartItems.length === 0}
				>
					Proceed to Checkout
				</button>
			</div>
		</div>
	);
}

export default CartScreen;
