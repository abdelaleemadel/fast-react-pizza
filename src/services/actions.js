import { redirect } from "react-router-dom";
import { createOrder } from "./apiRestaurant";
import store from "../store";
import { clearCart } from "../features/cart/cartSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str
    );

export async function createOrderAction({ request }) {
    const errors = {};


    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const order = {
        ...data,
        priority: data.priority === "true",
        cart: JSON.parse(data.cart)
    }
    if (!isValidPhone(order.phone)) errors.phone = 'Please give us your correct phone number, we need to contact you';
    if (Object.keys(errors).length > 0) return errors;


    const newOrder = await createOrder(order);
    store.dispatch(clearCart());
    return redirect(`/order/${newOrder.id}`);

}