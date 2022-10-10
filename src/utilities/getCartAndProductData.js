import { getFromDb } from "./fakeDataBase";

export const productsAndCartData = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const storedCart = getFromDb();
    const savedCart = [];
    for (const id in storedCart) {
      const quantity = storedCart[id];
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
  return {products, savedCart};
};
