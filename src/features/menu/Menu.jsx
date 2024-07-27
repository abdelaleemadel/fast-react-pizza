import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
function Menu() {
  const menu = useLoaderData();

  return (
    <>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </>
  );
}

export default Menu;
