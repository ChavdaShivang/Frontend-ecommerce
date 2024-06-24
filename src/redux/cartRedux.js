import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		quantity: 0,
		total: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			state.quantity += 1;
			state.products.push(action.payload);
			state.total += action.payload.price * action.payload.quantity;
		},
		clearCart: (state) => {
			state.quantity = 0;
			state.products = [];
			state.total = 0;
		},
		incrementQuantity: (state, action) => {
			state.products = state.products.map((product) =>
				product._id === action.payload
					? { ...product, quantity: product.quantity + 1 }
					: product
			);
			console.log(state.products);
			const product = state.products.filter(
				(product) => product._id === action.payload
			);
			state.total += product[0].price;
		},
		decrementQuantity: (state, action) => {
			let isDeleted = false;
			const updatedProducts = state.products.map((product) => {
				if (product._id === action.payload && product.quantity > 1) {
					return { ...product, quantity: product.quantity - 1 };
				} else if (
					product._id === action.payload &&
					product.quantity === 1
				) {
					isDeleted = true;
					return { ...product, quantity: 0 };
				} else {
					return product;
				}
			});

			const filteredProducts = updatedProducts.filter(
				(product) => product.quantity !== 0
			);
			const count = updatedProducts.length - filteredProducts.length;
			const decrementedProduct = state.products.find(
				(product) => product._id === action.payload
			);

			state.products = filteredProducts;
			if (isDeleted) {
				state.quantity -= count;
			}
			state.total -= decrementedProduct.price * count;
		},
	},
});

export const { addProduct, clearCart, incrementQuantity, decrementQuantity } =
	cartSlice.actions;
export default cartSlice.reducer;
