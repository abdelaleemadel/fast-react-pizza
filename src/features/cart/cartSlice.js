import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [
        {
            pizzaId: 12,
            name: 'Mediterranean',
            quantity: 2,
            totalPrice: 32,
            unitPrice: 16
        }
    ]
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            //payload = newItem
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            //payload = itemId
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
        },
        increaseItemQuantity(state, action) {
            //payload = itemId
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice
        },
        decreaseItemQuantity(state, action) {
            //payload = itemId
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice
        },
        clearCart(state) {
            state.cart = [];
        }
    }
})

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;
export const getCartTotalQuantity = (state) => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
export const getCartTotalPrice = (state) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)