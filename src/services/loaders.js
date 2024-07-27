import { getMenu, getOrder } from "./apiRestaurant"
export async function menuLoader() {
    const menu = await getMenu();
    return menu;
}

export async function orderLoader({ params: { orderId } }) {
    const order = await getOrder(orderId);
    return order;
}